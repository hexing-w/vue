import axios from 'axios'
export default {
  created () {
    this.loadUsersByPage(1)
  },
  data () {
    return {
      tableData: [],
      total:0,
      searchText : "",
      dialogFormVisible : false,
      addUserForm:{},
      formRule:{          
        username: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                ],
        password: [
              {required: true, message: '密码不能为空', trigger: 'blur'},
              {min: 3, max: 16, message: '密码为 3 - 16 位长度', trigger: 'blur'}
          ],
        address:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
        date:[]}
    }
  },

  methods:{

    handleCurrentChange(page){
      this.loadUsersByPage(page)
    },
    handleSearch(){
      this.loadUsersByPage(1)
  },
  handleAddUser(){
    axios({
      method: "POST",
      url:'http://localhost:5000/useradd',
      data:this.addUserForm,
      headers: {
            Authorization: window.localStorage.getItem('token')
          },
    }).then(res=>{
        
    })
  },
  handleDelete(index,rows,tableData){
      this.$confirm("确定要删除嘛","提示",{type:'warning'}).then(res=>{
        axios.get("http://localhost:5000/userdel",{
          params:{
            id:rows.id
          }
        }).then(res=>{
          this.$message.success("成功删除了用户")
          tableData.splice(index,1)
        })
      })
  },
  handleEdit(){

  },
  loadUsersByPage(page){
    axios.get('http://localhost:5000/userlist', {
          headers: {
            Authorization: window.localStorage.getItem('token')
          },
          params: {
            pagenum: page,
            pagesize: 5,
            name : this.searchText
          }
        })
          .then(res => {
            let status = res.status
            let data = res.data
            
            if (status === 200) {
              console.log(data.users,status)
              this.tableData = data.users
              this.total = data.total
            }
          })
    }
  }
}
1.
<script type="text/jsx">
  var Message=React.createClass({
    render:function(){
      return <h1 onclick={this.alertMsg}>{this.props.name}</h1>
    }
    
  })
  React.render(
   <Message name="sunshengda" />
   ,
    document.getElementById('example'),
    function () {
      console.log("渲染完成！！！")
    }
  )
  </script>

  2.
  <script type="text/jsx">
  var Header=React.createClass({
    render:function () {
      var tmpl=[]
      for(var i=0;i<10;i++){
        tmpl.push(
          <div key={"tmpl"+i}>
          <header>header</header>
          <Footer/>
          </div>
        )
      }
      return (
        <div>
        {tmpl}
        </div>
      )
    }
  })

  var Footer=React.createClass({
    render:function(){
      return (
      <footer>footer</footer>
    )
    }
  })

  React.render(
    <Header />,
    document.getElementById('app')
  )
  </script>

  3.
  <script type="text/jsx">
var ClickComponent=React.createClass({
    getInitialState:function () {
        return {
            clickCount:0
        }
    },
    handlerClick:function(){
        this.setState({
            clickCount:this.state.clickCount+1
        })
    },
    render:function(){
        return (
            <div>
            <h2>点击下面的按钮</h2>
            <button onClick={this.handlerClick}>点我</button>  
            <p>共点击{this.state.clickCount}</p>  
            </div> 
        )
    }
})

React.render(
    <ClickComponent/>,
    document.getElementById('app')
)

</script>

4.
var FormComponent=React.createClass({
    getInitialState:function(){
        return {
            selectValue:"B"
        }
    },
    handlerSelect:function(event){
        this.setState({
            selectValue:event.target.value
        })
    },
    render: function() {
        return (
            <form action="" >
                <select name="" id="" defaultValue="B">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </form>
        );
    }
})

React.render(
    <FormComponent/>,
    document.getElementById('app')
)
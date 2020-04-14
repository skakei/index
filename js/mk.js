
    let data = Mock.mock('http://www.xuhan/blogs',{
        "result|20":[{
        "id|+1":1,
        "title":'@csentence',
        "body":"@cparagraph",
        "name":"@name",
        "city":"@city",
        "ctime":'@datetime("y-MM-dd HH:mm:ss")',
    }]
    
})
//取得当前点击页面的id数  （例blogID=2）
function getUrlName() {
    // ⽤来存放健值对的空对像
    var args = {};
    // 去除我们的?号
    var url = location.search.length > 0 ? location.search.substring(1) : '';
    // 按&字符串去拆分数组
    var items = url.split('&');
    var item = null;
    for (var i = 0; i < items.length; i++) {
        item = items[i].split('=');
        args[item[0]] = item[1]
    }
    return args
}

//加载header（公共）
const d=`
<nav class="navbar navbar-inverse" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#example-navbar-collapse">
                    <span class="sr-only">切换导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">世界和平blog</a>
            </div>
            <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#">iOS</a></li>
                <li><a href="#">SVN</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        Java <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="../add.html">发布文章</a></li>
                        <li><a href="#">EJB</a></li>
                        <li><a href="#">Jasper Report</a></li>
                        <li class="divider"></li>
                        <li><a href="#">分离的链接</a></li>
                        <li class="divider"></li>
                        <li><a href="#">另一个分离的链接</a></li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn glyphicon glyphicon-search io"></button>
            </form>
        </div>
        
        </div>
    </nav>`
$('#header').append(d)
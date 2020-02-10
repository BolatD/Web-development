window.onload=function(){
    var todolist =[];
    this.document.getElementById('add').onclick=function(){
        var d=document.getElementById('id').value;
        var temp={};
        temp.todo=d;
        temp.check=false;
        var i =todolist.length;
        todolist[i]=temp;
        console.log(todolist);
       out();
    }
    function out(){
var out='';
for(var key in todolist){
    out+=todolist[key].todo+'<br>';
}
document.getElementById('out').innerHTML=out;

    }
}
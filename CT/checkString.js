

var t_ = []
function makeArr(t1=-1000, t2=1000, Ts=0.1){
    for(let i = t1; i < t2; i+=Ts){
        t_.push(i);
    }
}



function compute(expr, t1, t2){
    if(t1 === '-inf' || t2 === 'inf'){
        t1 = -1000;
        t2 = 1000;
    }
    else{
        t1 = max(t1, -1000);
        t2 = min(t2, 1000);
    }
    makeArr(t1, t2)
    var xt = []
    for(let i = 0; i < t_.length; i++){
        xt.push(eval(replace(expr,"t",t_[i])));
    }
    return xt
}

var s = "periodic(ramp(t)-2*ramp(t-1.5), 3)";

console.log(t_, compute(s))

function replace(expr, t, n, q=true){
        if(q){        
            expr = replace_t_(String(expr));
        }
        if(expr[0]===t)
        {
            if(expr.length === 1)
            {
                expr = expr.slice(0, 0)+n+expr.slice(1, expr.length)
            }
            else if(expr[1]==='+'||expr[1]==='-'||expr[1]==='*'||expr[1]==='/' ||expr[1]===' '){
               expr = expr.slice(0, 0)+n+expr.slice(1, expr.length)
            }
        }


        for(var i=1; i<expr.length-1; i++)
        {
            if(expr[i]===t && (expr[i-1]==="(" || expr[i-1]==='+'||expr[i-1]==='-'||expr[i-1]==='*'||expr[i-1]==='/' ||expr[i-1]===' ' ||expr[i+1]===' '||expr[i+1]==='+' ||expr[i+1]==='-'||expr[i+1]==='*' ||expr[i+1]===')' ||expr[i-1]==='/'))
            {
                // console.log(expr[i]);
                expr =expr.slice(0, i)+n+expr.slice(i+1, expr.length)
            }

        }

        if(expr[expr.length  -1 ]===t && (expr[expr.length  -2]==='+'||expr[expr.length  -2]==='-'||expr[expr.length  -2]==='*'||expr[expr.length  -2]==='/' ||expr[expr.length  -2]===' '))
        {
           expr = expr.slice(0, expr.length-1)+String(n);
        }

        return expr;
}

function sin(x){
    return Math.sin(x);
}
function exp(x)
{
    return Math.exp(x);
}
function sinc(x)
{
    if(x == 0){
        return 1;
    }
    else return Math.sin(x)/x
}
function impulse(x)
{
    if(x == 0){
        return 1;
    }
    return 0;
}
function cos(x)
{
    return Math.cos(x);
}
function ramp(x)
{
    return x*step(x);
}
function step(x)
{
    if(x>=0) return 1;
    return 0;
}
function sgn(x)
{
    return step(x)*2-1;
}
function pow(x, y)
{
    return x**y;
}
function abs(x)
{
    return Math.abs(x);
}
function sum(expr, n1, n2)
{
    expr = String(expr);
    ans = 0;
    for(let i = n1; i <= n2; i++){
        ans+=eval(replace(expr, 'i', i))
    }
}
function product(expr, lim=(i, n1, n2))
{
    expr = String(expr);
    ans = 0;
    for(let i = n1; i <= n2; i++){
        ans*=eval(replace(expr, 'i', i))
    }

}
function periodic(expr, period, t){
    console.log(expr)
    return eval(replace(expr, "q", (t%period+period)%period, false))
}

function replace_t_(expr)
{
    var stack = [];

    var pos = expr.search("periodic");
    if(pos === -1 ){
        return expr;
    }
    pos = pos+ 8;
    //console.log(expr[pos]);
    stack.push(expr[pos]);
    pos++;
    expr = expr.slice(0, pos)+"'"+expr.slice(pos, expr.length)
    while(stack.length!==0 && pos<expr.length)
    {
        //console.log("hhi");
        if(expr[pos]==='(')
        {
            stack.push('(');
            pos++;
        }

        else if(expr[pos]===')' && stack[stack.length -1]!==0)
        {
            stack.pop();
            if(stack.length === 0){
                expr = expr.slice(0, pos)+", t"+expr.slice(pos, expr.length)
            }
            pos++;
        }
        else if(expr[pos] === "," && stack.length == 1){
            expr = expr.slice(0, pos)+"'"+expr.slice(pos, expr.length)
            pos+=2;
        }
        else{
            if(expr[pos]==='t')
            {
                // console.log("change");
                expr = expr.slice(0,pos) +"q"+expr.slice(pos+1, expr.length)

            }
            pos++;
        }
        
        // console.log(expr, pos);
        // console.log(stack);
    }
   
//    console.log(expr);
    return expr;
    
}


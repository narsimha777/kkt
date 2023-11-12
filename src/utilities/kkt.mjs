import { derivative, evaluate, resolve} from 'mathjs';
import nerdamer from 'nerdamer';
import 'nerdamer/all.js'

const kkt = {
  get_derivequations(fun) {
    let eq1 = derivative(fun, 'x1', { simplify: true });
    let eq2 = derivative(fun, 'x2', { simplify: true });
    let eq3 = derivative(fun, 'u1', { simplify: true });
    let eq4 = derivative(fun, 'u2', { simplify: true });
    eq1 = eq1.toString();
    eq2 = eq2.toString();
    eq3 = eq3.toString();
    eq4 = eq4.toString();

    let obj = [ eq1, eq2, eq3, eq4 ];
    return obj;
  },
  get_case1(fun){
    let func = this.get_derivequations(fun);
    let scope = {u1:0,u2:0};
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1,scope).toString();
    eq2 = resolve(eq2,scope).toString();
    eq3 = resolve(eq3,scope).toString();
    eq4 = resolve(eq4,scope).toString();
    eq1=eq1+" = 0";
    eq2=eq2+" = 0";
    eq3=eq3+" = 0";
    eq4=eq4+" = 0";
    let obj = [eq1,eq2,eq3,eq4];
    console.log(obj);
    // let toget = obj.slice();
    let res = nerdamer.solveEquations(obj);
    return res;
  },
  get_case2(fun){
    let func = this.get_derivequations(fun);
    let scope = {u1:0,s2:0};
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1,scope).toString();
    eq2 = resolve(eq2,scope).toString();
    eq3 = resolve(eq3,scope).toString();
    eq4 = resolve(eq4,scope).toString();
    eq1=eq1+" = 0";
    eq2=eq2+" = 0";
    eq3=eq3+" = 0";
    eq4=eq4+" = 0";
    let obj = [eq1,eq2,eq3,eq4];
    // let toget = obj.slice();
    let res = nerdamer.solveEquations(obj);
    return res;
  },
  get_case3(fun){
    let func = this.get_derivequations(fun);
    let scope = {s1:0,u2:0};
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1,scope).toString();
    eq2 = resolve(eq2,scope).toString();
    eq3 = resolve(eq3,scope).toString();
    eq4 = resolve(eq4,scope).toString();
    eq1=eq1+" = 0";
    eq2=eq2+" = 0";
    eq3=eq3+" = 0";
    eq4=eq4+" = 0";
    let obj = [eq1,eq2,eq3,eq4];
    // let toget = obj.slice();
    let res = nerdamer.solveEquations(obj);
    return res;
  },
  get_case4(fun) {
    let func = this.get_derivequations(fun);
    let scope = { s2: 0, s1: 0 };
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1, scope).toString();
    eq2 = resolve(eq2, scope).toString();
    eq3 = resolve(eq3, scope).toString();
    eq4 = resolve(eq4, scope).toString(); 
    eq1 = eq1 + " = 0";
    eq2 = eq2 + " = 0"; 
    eq3 = eq3 + " = 0";
    eq4 = eq4 + " = 0";
    let obj = [eq2,eq1,eq4,eq3];
    // let toget = obj.slice();
    let res = nerdamer.solveEquations(obj);
    return res;
  }, 
  get_onsub1(fun){
    let func = this.get_derivequations(fun);
    let scope = {u1:0,u2:0};
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1,scope).toString();
    eq2 = resolve(eq2,scope).toString();
    eq3 = resolve(eq3,scope).toString();
    eq4 = resolve(eq4,scope).toString();
    eq1=eq1+" = 0";
    eq2=eq2+" = 0";
    eq3=eq3+" = 0";
    eq4=eq4+" = 0";
    let obj = [eq1,eq2,eq3,eq4];
    let toget = obj.slice();
    // let res = nerdamer.solveEquations(obj);
    return toget;
  },
  get_onsub2(fun){
    let func = this.get_derivequations(fun);
    let scope = {u1:0,s2:0};
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1,scope).toString();
    eq2 = resolve(eq2,scope).toString();
    eq3 = resolve(eq3,scope).toString();
    eq4 = resolve(eq4,scope).toString();
    eq1=eq1+" = 0";
    eq2=eq2+" = 0";
    eq3=eq3+" = 0";
    eq4=eq4+" = 0";
    let obj = [eq1,eq2,eq3,eq4];
    let toget = obj.slice();
    // let res = nerdamer.solveEquations(obj);
    return toget;
  },
  get_onsub3(fun){
    let func = this.get_derivequations(fun);
    let scope = {s1:0,u2:0};
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1,scope).toString();
    eq2 = resolve(eq2,scope).toString();
    eq3 = resolve(eq3,scope).toString();
    eq4 = resolve(eq4,scope).toString();
    eq1=eq1+" = 0";
    eq2=eq2+" = 0";
    eq3=eq3+" = 0";
    eq4=eq4+" = 0";
    let obj = [eq1,eq2,eq3,eq4];
    let toget = obj.slice();
    // let res = nerdamer.solveEquations(obj);
    return toget;
  },
  get_onsub4(fun) {
    let func = this.get_derivequations(fun);
    let scope = { s2: 0, s1: 0 };
    let eq1 = func[0];
    let eq2 = func[1];
    let eq3 = func[2];
    let eq4 = func[3];
    // let derivative = [eq1,eq2,eq3,eq4];
    eq1 = resolve(eq1, scope).toString();
    eq2 = resolve(eq2, scope).toString();
    eq3 = resolve(eq3, scope).toString();
    eq4 = resolve(eq4, scope).toString(); 
    eq1 = eq1 + " = 0";
    eq2 = eq2 + " = 0"; 
    eq3 = eq3 + " = 0";
    eq4 = eq4 + " = 0";
    let obj = [eq2,eq1,eq4,eq3];
    let toget = obj.slice();
    // let res = nerdamer.solveEquations(obj);
    return toget;
  }, 
  get_allsubs(fun){
    let sol1 = this.get_onsub1(fun);
    let sol2 = this.get_onsub2(fun);
    let sol3 = this.get_onsub3(fun);
    let sol4 = this.get_onsub4(fun);
    let result = [sol1,sol2,sol3,sol4];
    return result;
  },
  get_allcases(fun){
    let sol1 = this.get_case1(fun);
    let sol2 = this.get_case2(fun);
    let sol3 = this.get_case3(fun);
    let sol4 = this.get_case4(fun);
    let result = [sol1,sol2,sol3,sol4];
    return result;
  },
  get_feasiblesolution(fun){
    let partsol = this.get_allcases(fun);
    let result = [];
    for(let i=0;i<partsol.length;i++)
    {
      if(partsol[i][0]&&partsol[i][0][1]>=0&&partsol[i][1][1]>=0)
      {
        result.push([partsol[i][2][1],partsol[i][3][1],i]);
      }
    }
    return result;
  },
  get_finalsolution(func){
    let feasibile = this.get_feasiblesolution(func);
    let allsol = this.get_allcases(func);
    let cases = [['u1','u2'],['u1','s2'],['s1','u2'],['s1','s2']];
    let quantity = [];
    for(let i=0;i<feasibile.length;i++)
    {
      let a = cases[feasibile[i][2]][0];
      let b = cases[feasibile[i][2]][1];
      let c = allsol[feasibile[i][2]][0][0];
      let d = allsol[feasibile[i][2]][1][0];
      let scope;
      let cd;
      if(a==="u1"&&b==="s2"&&c==="s1"&&d==="u2"){
        scope = {u1:0,s2:0,x1:feasibile[i][0],x2:feasibile[i][1],s1:allsol[feasibile[i][2]][0][1],u2:allsol[feasibile[i][2]][1][1]};
        cd = [feasibile[i][0],feasibile[i][1]];
      }else if(a==="u1"&&b==="u2"&&c==="s1"&&d==="s2"){
        scope = {u1:0,u2:0,x1:feasibile[i][0],x2:feasibile[i][1],s1:allsol[feasibile[i][2]][0][1],s2:allsol[feasibile[i][2]][1][1]};
        cd = [feasibile[i][0],feasibile[i][1]];
      }else if(a==="s1"&&b==="s2"&&c==="u1"&&d==="u2")
      {
        scope = {s1:0,s2:0,x1:feasibile[i][0],x2:feasibile[i][1],u1:allsol[feasibile[i][2]][0][1],u2:allsol[feasibile[i][2]][1][1]};
        cd = [feasibile[i][0],feasibile[i][1]];
      }else if(a==="s1"&&b==="u2"&&c==="s2"&&d==="u1"){
       scope = {u2:0,s1:0,x1:feasibile[i][0],x2:feasibile[i][1],s2:allsol[feasibile[i][2]][0][1],u1:allsol[feasibile[i][2]][1][1]};
       cd = [feasibile[i][0],feasibile[i][1]];
      }
      let topush = evaluate(func,scope);
      quantity.push([topush,cd]);
    }
    let minquan=Number.MAX_VALUE;
    let mincord;
    for(let i=0;i<quantity.length;i++)
    {
      minquan=Math.min(minquan,quantity[i][0]);
      if(minquan===quantity[i][0])
      {
        mincord = quantity[i][1];
      }
    }
    return [minquan,mincord];
  }
}

export default kkt;

// let fun = ' (x1+x2)^2 + u1*(-(x1+x2)+s1) + u2*(-(7*x2+x1)+s2)';
// let fun = '(x1-x2)^2+5*x1+6*x2 + u1*(x1+x2+s1) + u2*(-(x1-x2)+s2)';
// let fun = '(x1^2+x2-11)^2+(x1+x2^2-7)^2 + u1*((x1-5)^2+x2^2-11-s1) + u2*(  -s2)';
// let res = kkt.get_derivequations(fun);
// let eq = res.eq1;
// let result = kkt.get_sub(eq,'x1','x2');
// console.log(result);
// let res = kkt.get_case1(fun);
// console.log(res.toString());

// let sol = nerdamer.solveEquations(['x+y=0', '2*x=0', '4*z+y=0']);
// let sol = kkt.get_case1(fun);
// let sol2 = kkt.get_case2(fun);
// let sol3 = kkt.get_case3(fun);
// let sol4 = kkt.get_case4(fun);
// let sol = kkt.get_finalsolution(fun);
// let sol = kkt.get_feasiblesolution(fun);
// console.log(sol);
// console.log(sol2);
// console.log(sol3);
// console.log(sol4);
// console.log(sol);
// let scope = {'a':3, 'b':4}
// let sol =evaluate('a * b', scope)    
// console.log(sol.toString());

import React, { useState } from 'react';
import '../App.css';
import kkt from '../utilities/kkt.mjs';

function KKT() {
    const [func, setFunction] = useState();
    const [finalsol, setFinalsol] = useState();
    const [len, setLength] = useState();
    const [expression, setExpression] = useState('');
    const [constraint1, setConstraint1] = useState('');
    const [constraint2, setConstraint2] = useState('');
    const [feasiblesol, setFeasible] = useState();
    const [derv, setDerv] = useState();
    const [sub, setSubs] = useState();
    const [solution, setSolution] = useState([]);
    const withrespectto = ['df/dx1', 'df/dx2', 'df/du1', 'df/du2'];
    const onsubstituting = [' u1 = 0 and u2 = 0 ', ' u1 = 0 and s2 = 0 ', ' s1 = 0 and u2 = 0 ', ' s1 = 0 and s2 = 0 '];
    function getfunction() {
        let funct;
        if (constraint1.indexOf('>') !== -1 && constraint2.indexOf('>') !== -1) {
            funct = `${expression} + u1*(-(${constraint1.substring(0, constraint1.indexOf('>'))})+s1) + u2*(-(${constraint2.substring(0, constraint2.indexOf('>'))})+s2)`;
        } else if (constraint1.indexOf('<') !== -1 && constraint2.indexOf('>') !== -1) {
            funct = `${expression} + u1*(${constraint1.substring(0, constraint1.indexOf('<'))}+s1) + u2*(-(${constraint2.substring(0, constraint2.indexOf('>'))})+s2)`;
        } else if (constraint1.indexOf('<') !== -1 && constraint2.indexOf('<') !== -1) {
            funct = `${expression} + u1*(${constraint1.substring(0, constraint1.indexOf('<'))}+s1) + u2*(${constraint2.substring(0, constraint2.indexOf('<'))}+s2)`;
        } else if (constraint1.indexOf('>') !== -1 && constraint2.indexOf('<') !== -1) {
            funct = `${expression} + u1*(-(${constraint1.substring(0, constraint1.indexOf('>'))})+s1) + u2*(${constraint2.substring(0, constraint2.indexOf('<'))}+s2)`;
        } else {
            funct = "Please!!, CHECK YOUR CONSTRAINTS";
        }
        setFunction(funct);
    }
    function handleclick() {
        let sol = kkt.get_allcases(func);
        let derivative = kkt.get_derivequations(func);
        let substitutes = kkt.get_allsubs(func);
        let feas = kkt.get_feasiblesolution(func);
        let solution = kkt.get_finalsolution(func);
        let leng = feas.length;
        setLength(leng);
        setFeasible(feas);
        setDerv(derivative);
        setSolution(sol);
        setSubs(substitutes);
        setFinalsol(solution);
    }

    function handlereadme() {
            alert("USE x1 and x2 as variables \nUSE 2nd degree expressions to avoid deifferentiation errors \nIf the solution is not displayed then equations are not unique in any one of the cases. (Try another equation)");
       };

    return (
        <div>
            <div className='header'>
                <h1 className="display-2--bs-primary-border-subtle">KARUSH-KUHN-TUCKER</h1>
                <button type="button" class="btn btn-outline-warning" onClick={handlereadme}>Read Me</button>
            </div>
            <div className="input-group">
                <span className="input-group-text"><strong>Enter Function: </strong> </span>
                <input
                    className="form-control"
                    aria-label="With textarea"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                />
                <span className="input-group-text"><strong>Enter Constraint 1: </strong> </span>
                <input
                    className="form-control"
                    aria-label="With textarea"
                    value={constraint1}
                    onChange={(e) => setConstraint1(e.target.value)}
                />
                <span className="input-group-text"><strong>Enter Constraint 2: </strong> </span>
                <input
                    className="form-control"
                    aria-label="With textarea"
                    value={constraint2}
                    onChange={(e) => setConstraint2(e.target.value)}
                />
            </div>
            <div className='inline'>
                <button className='btn btn-outline-success' onClick={getfunction}>GET FUNCTION</button>
                {func && <h4>Function: {func}</h4>}
                {func && <button className='btn btn-outline-success' onClick={handleclick}>GET SOLUTION</button>}
            </div>
            <div className="vstack gap-3">
                {derv && derv.map((e, ind) => (<div className='derivative'><strong><em>{withrespectto[ind]}</em> : {e} = 0</strong></div>))}
                <div className='Case-Container'>
                    {solution && solution.map((ele, ind) => (<div className="p-2">
                        <div className='cases'>
                            <h2>Solution for Case {ind + 1}:</h2>
                            <div className='onsub'><strong>On Substituiting {onsubstituting[ind]}</strong></div>
                            {sub[ind].map((e) => (<div className='subtitutes'>{e}</div>))}
                            <h4>On Solving WE GET :</h4>
                            <div className='sol'>{ele.map((t) => (<div className='sol'> {t[0]} = {t[1]}</div>))}</div>
                        </div>
                    </div>))}
                </div>
            </div>
            {(len !== 1) && feasiblesol && <h3 className='feashead'>Feasible Solutions: </h3>}
            {(len !== 1) && feasiblesol && feasiblesol.map((ele) => (<div className='feasible'><h5>x1 = {ele[0]} and x2 = {ele[1]} from Case {ele[2] + 1}</h5></div>))};
            {(len === 1) && feasiblesol && <h3 className='feashead'>Solution: </h3>}
            {(len === 1) && feasiblesol && <div className='feasible'><h5>x1 = {feasiblesol[0][0]} x2 = {feasiblesol[0][1]} </h5></div>}
            {(len === 0) && <h3 className='feasible'>No feasible solution!!</h3>}
            {(len >= 1) && finalsol && finalsol[0] && finalsol[1] && <h3 className='finans'>Final Solution is x1= {finalsol[1][0]} and x2 = {finalsol[1][1]} with function value of {finalsol[0]}</h3>}
        </div>
    );
}

export default KKT;

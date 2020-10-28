function t(t,e=60){let n=0,f=0,o=0,r=0,u=0,p=0;function l(t){n=t,f=1e3/n}return l(e),{get fps(){return n},set fps(t){l(t)},loop(e){p=e-o,p>=f&&(u=r,r=p%f,o=e-r,p-=u,p*=.001,t(p))}}}export default t;

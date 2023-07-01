import{s as f,n as T,o as C,b as L}from"../chunks/scheduler.e108d1fd.js";import{S as N,i as I,g as w,h as E,j as b,f as g,k as O,a as M}from"../chunks/index.7cf2deec.js";import{b as r,a as e}from"../chunks/babylon.gui.85b1caaa.js";const R=c=>{const i=new r.Engine(c,!0),o=new r.Scene(i);o.clearColor=new r.Color4(0,0,0,1);const s=r.MeshBuilder.CreateSphere("planet",{diameter:100});s.rotate(r.Vector3.Right(),Math.PI);const u=new r.StandardMaterial("planetMat",o);u.emissiveTexture=new r.Texture("./textures/2k_sun.jpg",o),s.material=u;const h=new r.ArcRotateCamera("Camera",Math.PI/2,Math.PI/2,50,new r.Vector3(50,20,50),o);h.setTarget(s),h.inputs.attached.pointers.panningSensibility=100,h.attachControl(c,!0);let x=["_pz.png","_nz.png","_px.png","_nx.png","_py.png","_ny.png"],m=r.MeshBuilder.CreateBox("skyBox",{size:1e4},o),d=new r.StandardMaterial("skyBox",o);d.backFaceCulling=!1,d.reflectionTexture=new r.CubeTexture("./textures/skybox/",o,x),d.reflectionTexture.coordinatesMode=r.Texture.SKYBOX_MODE,d.diffuseColor=new r.Color3(0,0,0),d.specularColor=new r.Color3(0,0,0),m.material=d;let p=e.AdvancedDynamicTexture.CreateFullscreenUI("OverlayUI",o),_=()=>{let a=new e.TextBlock("TitleBox","Solar Factuary");a.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_RIGHT,a.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,a.width="400px",a.height="100px",a.paddingRight="50px",a.color="white",a.fontSize="50px";let t=new e.TextBlock("SubTitleBox","The Sun");t.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_RIGHT,t.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,t.width="400px",t.height="100px",t.paddingRight="50px",t.color="white",t.fontSize="30px",t.top="50px";let n=e.Button.CreateSimpleButton("Return",`Return To
Solar System`);n.width="300px",n.height="50px",n.color="white",n.paddingRight="100px",n.top="-200px",n.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_RIGHT,n.onPointerClickObservable.add(function(){location.assign("../")}),p.addControl(a),p.addControl(t),p.addControl(n)},A=()=>{let a=new e.TextBlock("TitleBox","Did You Know?");a.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,a.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,a.width="400px",a.textHorizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,a.height="100px",a.paddingLeft="50px",a.color="white",a.fontSize="30px";let t=new e.TextBlock("Fact1","1. The Sun will continue to burn for about 130 million years after it burns through all of its hydrogen, instead of burning helium. During this time it will expand to such a size that it will engulf Mercury, Venus, and Earth. When it reaches this point, it will have become a red giant star.");t.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,t.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,t.width="500px",t.height="100px",t.paddingLeft="50px",t.textHorizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,t.top="100px",t.color="white",t.fontSize="15px",t.textWrapping=!0;let n=new e.TextBlock("Fact2","2. The Sun's magnetic field is constantly accelerating charged particles called the solar wind. But during solar flares, a large number of charged particles can be emitted. Sometimes a large piece of plasma can even break away from our star. This phenomenon is called coronary ejection.");n.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,n.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,n.width="500px",n.height="100px",n.paddingLeft="50px",n.textHorizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,n.top="250px",n.color="white",n.fontSize="15px",n.textWrapping=!0;let l=new e.TextBlock("Fact3","3. The layer of the Sun's surface that emits visible light is called the photosphere. There are colder areas that seem dark. You can't just look at our luminary through a telescope, but if you use dark filters, large groups of spots are visible. These are called sunspots which are areas on the surface of the Sun where the lines of force of its magnetic field are twisted and torn.");l.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,l.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,l.width="500px",l.height="100px",l.paddingLeft="50px",l.textHorizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,l.top="400px",l.color="white",l.fontSize="15px",l.textWrapping=!0,p.addControl(a),p.addControl(t),p.addControl(n),p.addControl(l)};return _(),A(),i.runRenderLoop(()=>{o.render()}),window.addEventListener("resize",()=>{i.resize()}),o};function S(c){let i;return{c(){i=w("canvas"),this.h()},l(o){i=E(o,"CANVAS",{class:!0}),b(i).forEach(g),this.h()},h(){O(i,"class","svelte-enr4tb")},m(o,s){M(o,i,s),c[1](i)},p:T,i:T,o:T,d(o){o&&g(i),c[1](null)}}}function y(c,i,o){let s;C(()=>{R(s)});function u(h){L[h?"unshift":"push"](()=>{s=h,o(0,s)})}return[s,u]}class k extends N{constructor(i){super(),I(this,i,y,S,f,{})}}export{k as component};

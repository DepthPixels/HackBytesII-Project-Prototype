import{s as R,n as N,o as v,b as S}from"../chunks/scheduler.e108d1fd.js";import{S as z,i as G,g as F,h as H,j as P,f as E,k as V,a as Z}from"../chunks/index.7cf2deec.js";import{b as n,a as e}from"../chunks/babylon.gui.85b1caaa.js";const D=async function(d){const r=new n.Engine(d,!0),t=new n.Scene(r),s=new n.ArcRotateCamera("Camera",Math.PI/2,Math.PI/2,5,new n.Vector3(500,0,500),t);s.inputs.attached.pointers.panningSensibility=10,s.attachControl(d,!0),s.maxZ=15e3;const C=new n.HemisphericLight("light",new n.Vector3(0,15,-15),t);C.intensity=.7;let A=["_pz.png","_nz.png","_px.png","_nx.png","_py.png","_ny.png"],O=n.MeshBuilder.CreateBox("skyBox",{size:1e4},t),h=new n.StandardMaterial("skyBox",t);h.backFaceCulling=!1,h.reflectionTexture=new n.CubeTexture("./textures/skybox/",t,A),h.reflectionTexture.coordinatesMode=n.Texture.SKYBOX_MODE,h.diffuseColor=new n.Color3(0,0,0),h.specularColor=new n.Color3(0,0,0),O.material=h;const _=["sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"],B=[150,10,15,15,10,50,45,30,30];let b=[],x,w=0;const M=100;let L,m;for(let[a,o]of _.entries())L=B[a],console.log(L,o),x=new n.MeshBuilder.CreateSphere(o,{diameter:L},t),m=new n.StandardMaterial(o+"Mat",t),m.emissiveTexture=new n.Texture(`./textures/2k_${o}.jpg`,t),m.diffuseTexture=new n.Texture(`./textures/2k_${o}.jpg`,t),x.material=m,x.position.x=w+=M,x.rotate(n.Vector3.Right(),Math.PI),b.push(x),w+=M;let y=()=>{let a,o=[],i,T,g;for(let[f,I]of b.entries())g=_[f],T=n.MeshBuilder.CreatePlane(g,{size:80}),T.parent=I,T.position.y=100,T.billboardMode=n.Mesh.BILLBOARDMODE_ALL,a=e.AdvancedDynamicTexture.CreateForMesh(T),i=e.Button.CreateSimpleButton(g,g.charAt(0).toUpperCase()+g.slice(1)),i.width=1,i.height=.4,i.color="white",i.fontSize=100,a.addControl(i),o.push(i);for(let[f,I]of o.entries())I.onPointerClickObservable.add(function(){location.assign(`./${_[f]}`)})},u=e.AdvancedDynamicTexture.CreateFullscreenUI("OverlayUI",t),k=()=>{let a=new e.TextBlock("TitleBox","Solar Factuary");a.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_RIGHT,a.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,a.width="400px",a.height="100px",a.paddingRight="50px",a.color="white",a.fontSize="50px";let o=new e.TextBlock("SubTitleBox","Solar System");o.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_RIGHT,o.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,o.width="400px",o.height="100px",o.paddingRight="50px",o.color="white",o.fontSize="30px",o.top="50px";let i=new e.TextBlock("CreditsBox","Made by @depthpixels and @g0bie");i.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_RIGHT,i.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_BOTTOM,i.width="400px",i.height="100px",i.paddingRight="50px",i.color="white",i.fontSize="15px",u.addControl(a),u.addControl(o),u.addControl(i)},c=new e.TextBlock("Tutorial Header","Tutorial");c.width="300px",c.height="50px",c.color="white",c.paddingLeft="50px",c.textHorizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT;let l=new e.TextBlock("Directions",`Use Left Click to Rotate
Use Right Click to Pan (Move Side-to-Side)
Use your scroll wheel to zoom in and out
Click the buttons above the planets to open planet view.
Incase Planets dissapear when zooming please keep zooming in to make them reappear, It is a known bug.`);l.width="500px",l.height="150px",l.color="white",l.top="50px",l.paddingLeft="50px",l.textHorizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,l.textWrapping=!0;let p=e.Button.CreateSimpleButton("Dismiss","Dismiss Tutorial");return p.width="200px",p.height="50px",p.background="#FFFFFF4A",p.paddingLeft="50px",p.top="200px",p.onPointerClickObservable.add(function(){c.isVisible=!1,l.isVisible=!1,p.isVisible=!1}),c.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,c.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,l.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,l.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,p.horizontalAlignment=e.Control.HORIZONTAL_ALIGNMENT_LEFT,p.verticalAlignment=e.Control.VERTICAL_ALIGNMENT_TOP,u.addControl(c),u.addControl(l),u.addControl(p),y(),k(),r.runRenderLoop(()=>{t.render()}),window.addEventListener("resize",()=>{r.resize()}),t};function U(d){let r;return{c(){r=F("canvas"),this.h()},l(t){r=H(t,"CANVAS",{class:!0}),P(r).forEach(E),this.h()},h(){V(r,"class","svelte-enr4tb")},m(t,s){Z(t,r,s),d[1](r)},p:N,i:N,o:N,d(t){t&&E(r),d[1](null)}}}function j(d,r,t){let s;v(()=>{D(s)});function C(A){S[A?"unshift":"push"](()=>{s=A,t(0,s)})}return[s,C]}class W extends z{constructor(r){super(),G(this,r,j,U,R,{})}}export{W as component};

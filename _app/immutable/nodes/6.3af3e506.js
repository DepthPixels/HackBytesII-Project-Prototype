import{s as d,n as l,o as h,b as m}from"../chunks/scheduler.e108d1fd.js";import{S as _,i as g,g as x,h as f,j as C,f as c,k as b,a as w}from"../chunks/index.7cf2deec.js";import{b as t}from"../chunks/babylon.gui.1005c8cc.js";const y=r=>{const n=new t.Engine(r,!0),e=new t.Scene(n);e.clearColor=new t.Color4(0,0,0,1);const a=t.MeshBuilder.CreateSphere("planet",{diameter:100});a.rotate(t.Vector3.Right(),Math.PI);const i=new t.StandardMaterial("planetMat",e);i.emissiveTexture=new t.Texture("../../textures/2k_mercury.jpg",e),a.material=i;const s=new t.ArcRotateCamera("Camera",Math.PI/2,Math.PI/2,50,new t.Vector3(50,20,50),e);s.setTarget(a),s.inputs.attached.pointers.panningSensibility=100,s.attachControl(r,!0);let p=["_pz.png","_nz.png","_px.png","_nx.png","_py.png","_ny.png"],u=t.MeshBuilder.CreateBox("skyBox",{size:1e4},e),o=new t.StandardMaterial("skyBox",e);return o.backFaceCulling=!1,o.reflectionTexture=new t.CubeTexture("../../textures/skybox/",e,p),o.reflectionTexture.coordinatesMode=t.Texture.SKYBOX_MODE,o.diffuseColor=new t.Color3(0,0,0),o.specularColor=new t.Color3(0,0,0),u.material=o,n.runRenderLoop(()=>{e.render()}),window.addEventListener("resize",()=>{n.resize()}),e};function M(r){let n;return{c(){n=x("canvas"),this.h()},l(e){n=f(e,"CANVAS",{class:!0}),C(n).forEach(c),this.h()},h(){b(n,"class","svelte-enr4tb")},m(e,a){w(e,n,a),r[1](n)},p:l,i:l,o:l,d(e){e&&c(n),r[1](null)}}}function S(r,n,e){let a;h(()=>{y(a)});function i(s){m[s?"unshift":"push"](()=>{a=s,e(0,a)})}return[a,i]}class B extends _{constructor(n){super(),g(this,n,S,M,d,{})}}export{B as component};

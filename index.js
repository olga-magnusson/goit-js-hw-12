import{a as S,S as q,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const P="49754140-bd1dd51ce5d5c06d761f1a420";async function m(t,r){try{return(await S.get("https://pixabay.com/api/",{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}catch(s){return console.error("Error fetching images:",s),[]}}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more-button"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const r=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:l,comments:w,downloads:v})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
            <img
                class="gallery-image"
                src="${s}"
                alt="${e}"
            />
            <div class="captions">
            <p>Likes: ${o}; </p>
            <p>Views: ${l}; </p>
            <p>Comments: ${w}; </p>
            <p>Downloads: ${v}; </p>
            </div>
        </a>
    </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),E.refresh()}function $(){f.innerHTML=""}function p(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function b(){g.classList.remove("hidden")}function a(){g.classList.add("hidden")}let c=1,d="";const u=document.querySelector(".form"),B=document.querySelector(".load-more-button");u.addEventListener("submit",async t=>{if(t.preventDefault(),d=u.elements["search-text"].value.trim(),d===""){n.error({title:"Error",message:"Please enter search parameters!"}),a();return}c=1,$(),a(),p();try{const r=await m(d,c);if(!r.hits||r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a();return}y(r.hits),c*15<r.totalHits&&b()}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{L()}});B.addEventListener("click",async()=>{c++,p(),a();try{const t=await m(d,c);if(!t.hits||t.hits.length===0){n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),a();return}y(t.hits);const r=document.querySelectorAll(".gallery-item"),s=r[r.length-t.hits.length];if(s){const i=s.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}c*15>=t.totalHits?b():(a(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"error",message:"An error occurred while loading more images."}),a()}finally{L()}});
//# sourceMappingURL=index.js.map

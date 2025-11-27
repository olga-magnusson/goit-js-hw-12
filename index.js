import{a as v,S as w,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const S="49754140-bd1dd51ce5d5c06d761f1a420";async function u(s,r){try{return(await v.get("https://pixabay.com/api/",{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}catch(t){return console.error("Error fetching images:",t),[]}}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more-button"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(({webformatURL:t,largeImageURL:c,tags:e,likes:o,views:n,comments:L,downloads:b})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${c}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${e}"
            />
            <div class="captions">
            <p>Likes: ${o}; </p>
            <p>Views: ${n}; </p>
            <p>Comments: ${L}; </p>
            <p>Downloads: ${b}; </p>
            </div>
        </a>
    </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),q.refresh()}function P(){f.innerHTML=""}function g(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function E(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}let i=1,$="";const d=document.querySelector(".form"),B=document.querySelector(".load-more-button");d.addEventListener("submit",async s=>{s.preventDefault();const r=d.elements["search-text"].value.trim();if(r===""){a.error({title:"Error",message:"Please enter search parameters!"});return}i=1,P(),l(),g();try{const t=await u(r,i);if(t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t.hits),i*15<t.totalHits?E():(l(),a.info({title:"info",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{p()}});B.addEventListener("click",async()=>{i++,g();try{const s=await u($,i);if(!s.hits||s.hits.length===0){l(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."});return}y(s.hits);const r=document.querySelector(".gallery-image");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}i*15>=s.totalHits&&(l(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"error",message:"An error occurred while loading more images."})}finally{p()}});
//# sourceMappingURL=index.js.map

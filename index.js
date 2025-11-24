import{a as w,S as q,i}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="49754140-bd1dd51ce5d5c06d761f1a420";async function f(a,r){try{return(await w.get("https://pixabay.com/api/",{params:{key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}catch(o){return console.error("Error fetching images:",o),[]}}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more-button"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(({webformatURL:o,largeImageURL:c,tags:e,likes:t,views:n,comments:b,downloads:v})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${c}">
            <img
                class="gallery-image"
                src="${o}"
                alt="${e}"
            />
            <div class="captions">
            <p>Likes: ${t}; </p>
            <p>Views: ${n}; </p>
            <p>Comments: ${b}; </p>
            <p>Downloads: ${v}; </p>
            </div>
        </a>
    </li>
    `).join("");m.insertAdjacentHTML("beforeend",r),P.refresh()}function E(){m.innerHTML=""}function p(){y.classList.add("hidden")}function L(){y.classList.remove("hidden")}function $(){h.classList.add("hidden")}function l(){h.classList.remove("hidden")}let s=1,d="";const u=document.querySelector(".form"),B=document.querySelector(".load-more-button");u.addEventListener("submit",async a=>{a.preventDefault();const r=u.elements["search-text"].value.trim();if(r===""){i.error({title:"Error",message:"Please enter search parameters!"});return}d=r,s=1,E(),l(),p();try{const o=await f(d,s);if(o.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o.hits),s*15<o.totalHits?$():(l(),i.info({title:"info",message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{L()}});B.addEventListener("click",async()=>{s++,p();try{const a=await f(query,s);g(a.hits);const r=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),s*15>=a.totalHits&&(l(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}finally{L()}});
//# sourceMappingURL=index.js.map

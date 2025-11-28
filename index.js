import{a as S,S as q,i}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const P="49754140-bd1dd51ce5d5c06d761f1a420";async function m(o,r){try{return(await S.get("https://pixabay.com/api/",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}catch(s){return console.error("Error fetching images:",s),[]}}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more-button"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const r=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:c,comments:v,downloads:w})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img
                class="gallery-image"
                src="${s}"
                alt="${e}"
            />
            <div class="captions">
            <p>Likes: ${t}; </p>
            <p>Views: ${c}; </p>
            <p>Comments: ${v}; </p>
            <p>Downloads: ${w}; </p>
            </div>
        </a>
    </li>
    `).join("");h.insertAdjacentHTML("beforeend",r),E.refresh()}function $(){h.innerHTML=""}function L(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}function b(){g.classList.remove("hidden")}function a(){g.classList.add("hidden")}let n=1,d="";const f=document.querySelector(".form"),B=document.querySelector(".load-more-button");f.addEventListener("submit",async o=>{if(o.preventDefault(),d=f.elements["search-text"].value.trim(),d===""){i.error({title:"Error",message:"Please enter search parameters!"}),u(),a();return}n=1,$(),a(),L();try{const r=await m(d,n);if(!r.hits||r.hits.length===0){a(),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(r.hits),n*15<r.totalHits?b():(a(),i.info({title:"info",message:"We're sorry, but you've reached the end of search results."}))}catch{a(),i.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{u()}});B.addEventListener("click",async()=>{n++,L();try{const o=await m(d,n);if(!o.hits||o.hits.length===0){a(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."});return}p(o.hits);const r=document.querySelector(".gallery-image");if(r){const s=r.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}n*15>=o.totalHits&&(b(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{a(),i.error({title:"error",message:"An error occurred while loading more images."})}finally{u()}});
//# sourceMappingURL=index.js.map

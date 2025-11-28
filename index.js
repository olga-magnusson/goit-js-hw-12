import{a as S,S as q,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const P="49754140-bd1dd51ce5d5c06d761f1a420";async function m(o,e){try{return(await S.get("https://pixabay.com/api/",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}})).data}catch(s){return console.error("Error fetching images:",s),{hits:[],totalHits:0}}}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more-button"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const e=o.map(({webformatURL:s,largeImageURL:a,tags:t,likes:r,views:c,comments:w,downloads:v})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img
                class="gallery-image"
                src="${s}"
                alt="${t}"
            />
            <div class="captions">
            <p>Likes: ${r}; </p>
            <p>Views: ${c}; </p>
            <p>Comments: ${w}; </p>
            <p>Downloads: ${v}; </p>
            </div>
        </a>
    </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),E.refresh()}function I(){f.innerHTML=""}function p(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function b(){y.classList.remove("hidden")}function i(){y.classList.add("hidden")}let l=1,d="";const u=document.querySelector(".form"),$=document.querySelector(".load-more-button");u.addEventListener("submit",async o=>{if(o.preventDefault(),d=u.elements["search-text"].value.trim(),d===""){n.error({title:"Error",message:"Please enter search parameters!"}),i();return}l=1,I(),i(),p();try{const e=await m(d,l);if(!e.hits||e.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i();return}g(e.hits),l*15<e.totalHits&&b()}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{L()}});$.addEventListener("click",async()=>{l++,p(),i();const o=document.querySelectorAll(".gallery-item").length;try{const e=await m(d,l);if(!e.hits||e.hits.length===0){n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),i();return}g(e.hits);const a=document.querySelectorAll(".gallery-item")[o];if(a){const t=a.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}l*15<e.totalHits?b():(i(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"error",message:"An error occurred while loading more images."}),i()}finally{L()}});
//# sourceMappingURL=index.js.map

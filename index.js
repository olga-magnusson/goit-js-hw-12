import{a as f,S as m,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="49754140-bd1dd51ce5d5c06d761f1a420";async function y(a,t){try{return(await f.get("https://pixabay.com/api/",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",p:t}})).data}catch(o){return console.error("Error fetching images:",o),[]}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){l.innerHTML=a.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:s,downloads:d})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${o}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${i}"
            />
            <div class="captions">
            <p>Likes: ${e}; </p>
            <p>Views: ${r}; </p>
            <p>Comments: ${s}; </p>
            <p>Downloads: ${d}; </p>
            </div>
        </a>
    </li>
    `).join(""),g.refresh()}function L(){l.innerHTML=""}function b(){u.classList.add("loader")}function v(){u.classList.remove("loader")}const c=document.querySelector(".form");c.addEventListener("submit",async a=>{a.preventDefault();const t=c.elements["search-text"].value.trim();if(L(),t===""){n.error({title:"Error",message:"Please enter search parameters!"});return}b();try{const o=await y(t);o.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(o.hits)}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{v()}c.reset()});
//# sourceMappingURL=index.js.map

const security=[{key:'X-Content-Type-Options',value:'nosniff'},{key:'X-Frame-Options',value:'SAMEORIGIN'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'}];
export default {reactStrictMode:true,poweredByHeader:false,images:{formats:['image/avif','image/webp']},async headers(){return[{source:'/(.*)',headers:security}]}};

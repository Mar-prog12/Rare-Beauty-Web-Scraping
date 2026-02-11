Përshkrimi i Projektit
Ky projekt implementon një pipeline të plotë për mbledhjen dhe përpunimin e të dhënave, duke marrë produkte reale nga faqja “Rare Beauty”, duke i pasuruar me një API të jashtme, duke i normalizuar, duke aplikuar enkriptim AES-256  për fushat sensitive dhe duke i ruajtur rezultatet finale në format JSON.

Projekti është ndërtuar në module të ndara, secili i testuar veçmas, dhe është zhvilluar me commit-e të vogla dhe logjike në Git, për të pasqyruar një histori reale zhvillimi.

Faqja Target
- Faqja: Rare Beauty  
- URL: https://www.rarebeauty.com  
- Platforma: Shopify  

Rare Beauty është një brand kozmetike i ndërtuar mbi Shopify.  
Në vend të scraping të HTML-së dinamike, projekti përdor “Shopify JSON endpoint (`products.json`)”, i cili ofron të dhëna të strukturuara dhe të qëndrueshme.
Çfarë Bën Projekti
1. Merr produkte reale nga faqja Rare Beauty
2. Pasuron të dhënat përmes një API-je të jashtme
3. Pastron dhe normalizon të dhënat
4. Enkripton fushat sensitive duke përdorur “AES-256”
5. Ruan output-in final në një file JSON

 Arkitektura e Projektit
src/
─ scraping/  Logjika e scraping të produkteve
─ api/  Pasurimi i të dhënave me API
─ processing/ Normalizimi dhe pastrimi i të dhënave
─ security/ Enkriptimi AES-256
─ storage/ Ruajtja e të dhënave
─ main.js Pipeline-i final
─ testScraping.js
─ testApi.js
─ testProcessing.js
─ testEncryption.js
data/
└── final.json
.env.example
README.md

node scr/testScraping → nxjerr produkte
node scr/testApi → ka rating & category
node scr/testProcessing → price number
node scr/testEncryption → hex string
node scr/main.js → pipeline success
node scr/data/final.json ekziston
.env nuk është në GitHub
commit-e të vogla, logjike

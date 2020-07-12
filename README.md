#德安訂房前台平台系統

## Get Start

### 1. 安裝套件

`$ npm install $ npm install gulp -g 安裝gulp global 全域（sudo npm install gulp -g）`

### 2. 修改 gulpfile 檔

``
\$ gulp

``
啟動後自行輸入 Port 後輸入 visual/index.html

### 3. 為了各版本瀏覽器

testAutoFx 已經合併至 sass 內 gulp

### 開發注意事項

- commit 前需要對修改的檔案做 eslint 格式的檢查 ，必須確保都沒問題 (格式設定檔路徑 : ..eslintrc.json)
- commit 前需要 merge 遠端 develop 分支回自己要 commit 的該分支，減緩維運人員 merge 時衝突情況
- 分支規則 [單號_dev] (ex: 175509_dev )

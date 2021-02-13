要如何參與 GitHub 上面開源專案的開發呢？  
本篇文章提供一個快速教學讓大家參考。

## 開始參與開源專案的開發

- 從你想參與開發的專案 fork 程式碼庫到自己的 GitHub:  
   (這裡以 Frontend 為範例專案)  
   點擊專案右上角的 Fork 按鈕:  
   ![fork](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

- 從自己的 GitHub 將專案 Clone 下來:

  ```bash
  git clone https://github.com/<你的GitHub帳號>/example-repo.git
  cd example-repo
  ```

1. 切換到專案開發的主分支:  
   注意到你所參與開發的專案是使用什麼開發流程。  
   ex. [GitHub Flow](https://medium.com/@trylovetom/%E8%AE%93%E6%88%91%E5%80%91%E4%BE%86%E4%BA%86%E8%A7%A3-github-flow-%E5%90%A7-4144caf1f1bf)  
   假設專案開發的主分支在 `develop`:

   ```bash
   git checkout develop
   ```

2. 依照功能或開發項目從主分支建立一個新分支:

   ```bash
   git checkout -b feature/homepage
   ```

3. 接者便可以開始進行開發，待開發完成之後，將程式碼 commit 並 push 到你自己的 Repository:

   ```bash
   git add .
   git commit -m "feat: add homepage and the reative pages"

   # 如果尚未在 remote 建立分支
   git push -u origin feature/homepage

   # or
   # 如果已經在 remote 建立分支並 push 過了
   git push
   ```

4. 回到你所參與的開源專案 GitHub 頁面

5. 點擊 **Compare & pull request**

   ![Compare & pull request](https://i.imgur.com/RgM2CLh.png)

6. 確認資訊並填寫 PR 的訊息，接著送出:

   ![Create pull request](https://i.imgur.com/6Dby5ri.png)

7. 看到下列頁面就完成了:

   ![PR Created](https://i.imgur.com/2uN3Vr7.png)

## 將所參與的專案的更動同步更新到自己的 Repository

_這邊以 `upstream` 代表你所參與開發的專案_

- 還沒設定共同專案的 Repo 到自己的本地專案以前，請先設定:

  ```bash
  git remote add upstream https://github.com/example-org/example-repo.git
  ```

- 已經設定好 upstream 了，之後每次只要執行下面的指令就可以更新 `develop` 分支囉:

  ```bash
  git checkout develop
  git pull upstream develop
  git push origin develop

  # 如過 push 到 develop 時出現相關錯誤訊息，請執行:
  git push -f origin develop
  ```

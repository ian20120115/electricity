from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # 這裡無需處理任何表單數據，直接渲染主頁面
    return render_template('index.html')

if __name__ == '__main__':
    # 設置 debug=True 在開發階段很有用，生產環境應改為 False
    app.run(debug=True)
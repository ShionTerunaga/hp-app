export class CustomError extends Error {
    public status;
    public name;
    public detail;

    constructor(message: string) {
        super(message); // Error クラスのコンストラクタを呼び出す
        this.name = ""; // エラー名を設定
        this.status = 0;
        this.message = message;
        this.detail = "";
    }
}

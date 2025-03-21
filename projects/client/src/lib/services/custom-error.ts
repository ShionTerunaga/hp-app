export class CustomError extends Error {
    public status;
    public name;

    constructor(message: string) {
        super(message); // Error クラスのコンストラクタを呼び出す
        this.name = ""; // エラー名を設定
        this.status = 0;
        this.message = message;
    }
}

import { ja } from "@/shared/lang/ja";
import styles from "./styles.css";
import { getCharacter } from "@/feature/member-list/services/get-character";
import { RESULT_NG } from "@/lib/core/result";

export async function HomeLayout() {
    const characters = await getCharacter();

    if (characters.kind === RESULT_NG) {
        return;
    }

    console.log(characters.value);
    return (
        <main>
            <h1 className={styles.heading}>{ja.home.title}</h1>
            <section className={styles.container}>
                <div className={styles.contentBox}>
                    <p className={styles.characterText}>
                        <span className={styles.characterTextFirst}>
                            {ja.home.C}
                        </span>
                        <span className={styles.characterTextSecond}>
                            {ja.home.character}
                        </span>
                    </p>
                </div>
            </section>
        </main>
    );
}

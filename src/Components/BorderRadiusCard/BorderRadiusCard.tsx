import style from "./BorderRadiusCard.module.css";

function BorderRadiusCard() {
    return(
        <div className={style.cardBody}>
            <div className={style.card}>
                <div className={style.imgBox}>        
                </div>
                <div className={style.content}>
                    <span className={style.price}>        
                    </span>        
                </div>
             </div>
        </div>    
    );
}
export default BorderRadiusCard;
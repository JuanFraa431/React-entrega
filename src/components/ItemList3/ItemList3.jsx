import "./ItemList3.css"

const ItemList3 = ({ children }) => {
    return (
        <div
            style={{
                padding: "25px 50px 50px 50px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
            }}
            >
            <div className="editTexto">{children}</div>
        </div>
    );
};

export default ItemList3;

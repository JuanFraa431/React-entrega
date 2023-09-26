const ItemList2 = ({ children }) => {
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
            {children}
        </div>
    );
};

export default ItemList2;

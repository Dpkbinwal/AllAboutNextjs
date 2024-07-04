export default function ColorBox({children,left,right}){
    
    const isSidebar=false;
    return (

        <section>
            {children}
            {isSidebar? left:right}
        </section>
    )
}
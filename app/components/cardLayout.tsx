
const CardLayout = ({children}:{children:React.ReactNode[]}) => {
    return (
        <section className='grid grid-cols-5 gap-5'>
            {...children}
        </section>
    );
};

export default CardLayout;
import { Helmet } from 'react-helmet';
function ComponenteHelmet({ title, description }) {
    console.log("ComponenteHelmet renderizado con título:", title);
    return (
        <Helmet>
            <title> {title} | Gemas y Joyas</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}

export default ComponenteHelmet;
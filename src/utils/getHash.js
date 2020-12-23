
/**
 *  location.hash  -> trae el fragmento de la url a partir de donde encuentre un #
 */

const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;
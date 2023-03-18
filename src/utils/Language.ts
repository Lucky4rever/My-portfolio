import ua from "../db/language/ua.json";
import en from "../db/language/en.json";

const LanguageList = [
    { name: "en", content: en},
    { name: "ua", content: ua}
];

export const LanguageToggler = () => {
    let isThisNewLanguage: boolean = false;
    const languageFromLink = window.location.pathname.slice(1, 3);
    const pathname = window.location.pathname.slice(3);

    for (const language of LanguageList) {
        if (isThisNewLanguage)
            return "/" + language.name + pathname;

        if (language.name === languageFromLink)
            isThisNewLanguage = true;
    }

    return "/" + LanguageList[0].name + pathname;
};

function getLanguage() {
    let language = LanguageList[0];
    const languageFromLink = window.location.pathname.slice(1, 3);

    LanguageList.forEach((lang) => {
        if (lang.name === languageFromLink)
            language = lang;
    });
    
    return language;
}
export default getLanguage();
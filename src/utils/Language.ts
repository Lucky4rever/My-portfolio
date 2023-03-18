import ua from "../db/language/ua.json";
import en from "../db/language/en.json";

const LanguageList = [
    { name: "en", content: en},
    { name: "ua", content: ua}
];

export const LanguageToggler = () => {
    let isThisNewLanguage: boolean = false;
    const windowPathname = window.location.pathname;
    const languageFromLink = windowPathname.slice(14, 16);
    const pathname = windowPathname.slice(16, windowPathname.length);

    for (const language of LanguageList) {
        if (isThisNewLanguage)
            return "/my-portfolio/" + language.name + pathname;

        if (language.name === languageFromLink)
            isThisNewLanguage = true;
    }

    return "/my-portfolio/" + LanguageList[0].name + pathname;
};

function getLanguage() {
    let language = LanguageList[0];
    const windowPathname = window.location.pathname;
    const languageFromLink = windowPathname.slice(14, 16);

    LanguageList.forEach((lang) => {
        if (lang.name === languageFromLink)
            language = lang;
    });
    
    return language;
}
export default getLanguage();
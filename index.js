function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function 2: introductionWithLanguage(name, language)
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function 3: introductionWithLanguageOptional(name, language)
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function 4: introductionWithLanguageOptionalOverride(name, language)
  function introductionWithLanguageOptionalOverride(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
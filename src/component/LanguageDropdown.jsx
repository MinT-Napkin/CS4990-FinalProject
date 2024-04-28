import React from 'react';
import Select from 'react-select';

const LanguageDropdown = ({selectedLanguage, setSelectedLanguage}) => {

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'black', // Set background color to black
      color: 'white', // Set text color to white
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'black',
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'blue' : 'black', // Set the highlight color based on whether the option is selected
      color: 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white', // Set the color of the selected item's text to white
    }),
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'ar', label: 'Arabic' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ru', label: 'Russian' },
    { value: 'it', label: 'Italian' },
    { value: 'nl', label: 'Dutch' },
    { value: 'sv', label: 'Swedish' },
    { value: 'fi', label: 'Finnish' },
    { value: 'da', label: 'Danish' },
    { value: 'no', label: 'Norwegian' },
    { value: 'tr', label: 'Turkish' },
    { value: 'th', label: 'Thai' },
    { value: 'pl', label: 'Polish' },
    { value: 'id', label: 'Indonesian' },
    { value: 'ms', label: 'Malay' },
    { value: 'hi', label: 'Hindi' },
    { value: 'he', label: 'Hebrew' },
    { value: 'fa', label: 'Persian' },
    { value: 'hu', label: 'Hungarian' },
    { value: 'cs', label: 'Czech' },
    { value: 'sk', label: 'Slovak' },
    { value: 'uk', label: 'Ukrainian' },
    { value: 'ro', label: 'Romanian' },
    { value: 'bg', label: 'Bulgarian' },
    { value: 'hr', label: 'Croatian' },
    { value: 'sr', label: 'Serbian' },
    { value: 'sl', label: 'Slovenian' },
    { value: 'et', label: 'Estonian' },
    { value: 'lv', label: 'Latvian' },
    { value: 'lt', label: 'Lithuanian' },
    { value: 'mk', label: 'Macedonian' },
    { value: 'sq', label: 'Albanian' },
    { value: 'hy', label: 'Armenian' },
    { value: 'ka', label: 'Georgian' },
    { value: 'uz', label: 'Uzbek' },
    { value: 'kk', label: 'Kazakh' },
    { value: 'tg', label: 'Tajik' },
    { value: 'mn', label: 'Mongolian' },
    { value: 'ps', label: 'Pashto' },
    { value: 'ku', label: 'Kurdish' },
    { value: 'sd', label: 'Sindhi' },
    { value: 'ne', label: 'Nepali' },
    { value: 'pa', label: 'Punjabi' },
    { value: 'si', label: 'Sinhala' },
    { value: 'bn', label: 'Bengali' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'ta', label: 'Tamil' },
    { value: 'te', label: 'Telugu' },
    { value: 'kn', label: 'Kannada' },
    { value: 'ml', label: 'Malayalam' },
    { value: 'th', label: 'Thai' },
    { value: 'lo', label: 'Lao' },
    { value: 'my', label: 'Burmese' },
    { value: 'km', label: 'Khmer' },
    { value: 'am', label: 'Amharic' },
    { value: 'ti', label: 'Tigrinya' },
    { value: 'so', label: 'Somali' },
    { value: 'sw', label: 'Swahili' },
    { value: 'rw', label: 'Kinyarwanda' },
    { value: 'mg', label: 'Malagasy' },
    { value: 'om', label: 'Oromo' },
    { value: 'sn', label: 'Shona' },
    { value: 'ny', label: 'Chichewa' },
    { value: 'ha', label: 'Hausa' },
    { value: 'ig', label: 'Igbo' },
    { value: 'yo', label: 'Yoruba' },
    { value: 'zu', label: 'Zulu' },
    { value: 'st', label: 'Sesotho' },
    { value: 'tn', label: 'Setswana' },
    { value: 'xh', label: 'Xhosa' },
  ];
  

  const handleChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  return (
    <div>
      <h2>Select a language:</h2>
      <Select
        value={selectedLanguage}
        onChange={handleChange}
        options={languageOptions}
        placeholder="Select"
        styles={customStyles}
        isSearchable
      />
      <p>Selected language: {selectedLanguage ? selectedLanguage.label : "Select a Language"}</p>
    </div>
  );
};

export default LanguageDropdown;
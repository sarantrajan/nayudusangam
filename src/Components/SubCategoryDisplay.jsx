import React from 'react';

const subCategoriesList = [
  "கவரா நாயுடு",
  "கௌரவ நாயுடு",
  "கவரா செட்டியார்",
  "ரவுத்த நாயுடு",
  "கம்மா நாயுடு",
  "கம்மவார் நாயக்கர்",
  "கம்மவார் நாயுடு",
  "வடுகர் நாயக்கர்",
  "தாசாங்க நாயுடு",
  "ராவ்",
  "சௌத்திரி",
  "பலிஜா நாயுடு",
  "காஜலு பலிஜா",
  "வலையல் செட்டி",
  "வளையல்கார நாயுடு",
  "வளையல்கார நாயக்கர்",
  "கவரா செட்டி",
  "முககு பலிஜா",
  "லிங்க பலிஜா",
  "தேசாதிபதி பலிஜா",
  "கோண பலிஜா",
  "தேசாபதி நாயுடு",
  "கம்பளத்து நாயக்கர்",
  "தொட்டிய நாயக்கர்",
  "தொழுவ நாயக்கர்",
  "ஜனப்ப நாயுடு",
  "ஜனப்ப செட்டி",
  "சலுப்ப செட்டி",
  "சதுப்ப செட்டி",
  "கொல்லா நாயுடு",
  "வெலமா நாயுடு",
  "பத்ம வெலமா நாயுடு",
  "தேவர் கோண்டா",
  "டோரா",
  "கோப்புல வெலமா",
  "காப்பு நாயுடு",
  "தெலகா நாயுடு",
  "இடிகா நாயுடு",
  "தாசாங்க தாசரி / தாசரி நாயுடு",
  "கங்கவார் நாயுடு",
  "முத்துராஜா நாயுடு",
  "முத்துராஜாலு நாயுடு",
  "முத்திரியர் நாயுடு",
  "பாளையகார நாயுடு",
  "தலையாரி நாயுடு",
  "வால்மீகி நாயுடு",
  "யாதவா நாயுடு",
  "ராயுடு"
];

function SubCategoryDisplay() {
  

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
      
      <h1 className="text-2xl font-bold text-center text-blue-800 mb-2">
        தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை
      </h1>
      <h2 className="text-xl font-semibold text-center text-red-600 mb-6">
        ஒன்றிணைவோம் எழுச்சி பெறுவோம்
      </h2>
      
      <h3 className="text-lg font-bold text-gray-900 mb-4 text-center border-b-2 pb-2">
        கீழ்க்கண்ட நாயுடு - நாயக்கர் உட்பிரிவுகள்
      </h3>

      <ul className="
        grid 
        grid-cols-1     
        sm:grid-cols-2   
        lg:grid-cols-4   
        gap-x-6           
        gap-y-2
      ">
        
        {subCategoriesList.map((item, index) => (
          <li key={index} className="text-gray-800 flex">
            <span className="font-semibold mr-2 w-8 text-right flex-shrink-0">
              {index + 1})
            </span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>

      
    </div>
  );
}

export default SubCategoryDisplay;
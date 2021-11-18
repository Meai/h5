H5.merge(new System.Globalization.CultureInfo("tzm", true), {
    englishName: "Central Atlas Tamazight",
    nativeName: "Tamaziɣt n laṭlaṣ",

    numberFormat: H5.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "war amdhan",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-ifedh",
        positiveInfinitySymbol: "+ifedh",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "DA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: H5.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["lh'd","let","ttl","lar","lex","ldj","sse"],
        abbreviatedMonthGenitiveNames: ["Yen","Fur","Megh","Yeb","May","Yun","Yul","Ghu","Cut","Tub","Nun","Duj",""],
        abbreviatedMonthNames: ["Yen","Fur","Megh","Yeb","May","Yun","Yul","Ghu","Cut","Tub","Nun","Duj",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["lh'ed","letnayen","ttlata","larebâa","lexmis","ldjemâa","ssebt"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dd MMMM, yyyy H:mm:ss",
        longDatePattern: "dd MMMM, yyyy",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["Yennayer","Furar","Meghres","Yebrir","Magu","Yunyu","Yulyu","Ghuct","Cutenber","Tuber","Nunember","Dujanbir",""],
        monthNames: ["Yennayer","Furar","Meghres","Yebrir","Magu","Yunyu","Yulyu","Ghuct","Cutenber","Tuber","Nunember","Dujanbir",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd-MM-yyyy",
        shortestDayNames: ["lh","lt","tt","la","lx","ld","ss"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: H5.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1252,
        CultureName: "tzm-Latn-DZ",
        EBCDICCodePage: 20297,
        IsRightToLeft: false,
        LCID: 2143,
        listSeparator: ";",
        MacCodePage: 10000,
        OEMCodePage: 850,
        IsReadOnly: true
    })
});
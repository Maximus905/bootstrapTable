const tableSettings = {
  "table": {
    "width": "50px [100%]",
    "border": {
      "width": "3px [1px]",
      "color": "#eee [#000]",
    },
    "globalFilter": true|false,
    "renderRow": "functin for rendering row",
  },
  "columns": [
    {
      "title": "column title", // default ""
      "accessor": "db_filed_name", // default ""
      "minWidth": 0, // width in px
      "maxWidth": 0, // width in px
      "currentWidth": "",
      "isVisible": true|false, // default - true
      "filterable": true|false,
      // if "renderCell" is not defined, used default function
      "renderCell": "function for rendering cell",
      // if filter isn't defined and filterable = true, used default filter definition (see below) 
      "filter": {
        "filterBy": ["accessor_1, accessor_N"], // field or fields for filtering
        "operator": "=", // current operator for filtering
        "operatorsList": [
          {"op_title": "op_value"},
          {"=": "="},
          {"начинается": "startsFrom"},
          {"содержит": "consists"},
          {"заканчивается": "endsWith"}
        ],
        "value": "" // current value of filter
      },
      // default definition of filter
      "filter": {
        "filterBy": "db_field_name", // from accessor filed
        "operator": "=",
        "operatorList": {"=": "="},
        "value": "" // current value of filter
      }
    }
  ],
  // if globalFilter isn't defined and global filter in table is "true", used default definition of global filter (see below)
  "globalFilter": {
    "filterBy": ["accessor_1, accessor_N"], // field or fields for filtering
    "operator": "=", // current operator for filtering
    "operatorsList": {
      "=": "=",
      "начинается": "startsFrom",
      "содержит": "consists",
      "заканчивается": "endsWith"
    },
    "value": "" // current value of filter
  },
  //default definition for global filter
  "globalFilter": {
    "filterBy": ["list of all filterable columns"], // field or fields for filtering
    "operator": "=", // current operator for filtering
    "operatorsList": {
      "=": "="
    },
    "value": "" // current value of filter
  }
}
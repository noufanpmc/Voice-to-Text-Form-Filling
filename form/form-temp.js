$form1 = {

	1 : {
		"question" : "What is your Name?",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {}
	},

	// 2 : {
	// 	"question" : "What is your Father's Name?",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alpha",
	// 						"min" : "1",
	// 						"max" : "30"
	// 					},
	// 	"pre" : {}
	// },
	//
	// 3 : {
	// 	"question" : "What is your Mother's Name?",
	// 		"type" : {
	// 					"input" : "text",
	// 				},
	// 		"validation" : {
	// 							"type" : "alpha",
	// 							"min" : "1",
	// 							"max" : "30"
	// 						},
	// 		"pre" : {}
	// 	},
	//
	// 4 : {
	// 	"question" : "What is your Spouse Name?",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alpha",
	// 						"min" : "1",
	// 						"max" : "30"
	// 					},
	// 	"pre" : {}
	// },
	//
	// 5 : {
	// 	"question" : "Tell me your Date of Birth?",
	// 	"type" : {
	// 				"input" : "date",
	// 			},
	// 	"validation" : {
	// 						"type" : "date",
	// 						"min" : "10",
	// 						"max" : "10"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 6 : {
	// 	"question" : "Tell me your Place of Birth along with country Name",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alpha",
	// 						"min" : "0",
	// 						"max" : "30"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 7 : {
	// 	"question" : "Tell me your Gender",
	// 	"type" : {
	// 				"input" : "radio",
	// 				"options" : ["male", "female"],
	// 				"images" : ["images/male.png", "images/female.png"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 	//For Female Proposed Insured Only
	//
	// 8 : {
	//
	// 	"question" : "Are you Pregnant? Yes or No",
	// 	"type" : {
	// 				"input" : "radio",
	// 				"options" : ["yes", "no"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {"7" : "female"}
	// },
	//
	// 9 : {
	//
	// 	"question" : "Female Life isnured-Current month of pregnenecy ",
	// 	"type" : {
	// 				"input" : "dropdown",
	// 				"options" : ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 						"min" : "1",
	// 						"max" : "10"
	// 					},
	// 	"pre" : {"84" : "yes"}
	// },
	//
	// 10 : {
	//
	// 	"question" : "Miscarriage-Have you delivered, undergone caesarian section, had any abortion or miscarriage? Yes or No",
	// 	"type" : {
	// 				"input" : "radio",
	// 				"options" : ["yes", "no"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {"7" : "female"}
	// },
	//
	// 11 : {
	//
	// 	"question" : "If yes, please mention period elapsed since last ocassion",
	// 	"type" : {
	// 				"input" : "dropdown",
	// 				"options" : ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 						"min" : "1",
	// 						"max" : "10"
	// 					},
	// 	"pre" : {"10" : "yes"}
	// },
	//
	// 12 : {
	//
	// 	"question" : "Disorder-Have you suffered / are suffering from any disorder of the breast or reproductive organs? Yes or No",
	// 	"type" : {
	// 				"input" : "radio",
	// 				"options" : ["yes", "no"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options"
	// 					},
	// 	"pre" : {"7" : "female"}
	// },
	//
	//
	// 13 : {
	//
	// 	"question" : "Suffering From any Pregrancy Complications? Yes or No",
	// 	"type" : {
	// 				"input" : "radio",
	// 				"options" : ["yes", "no"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {"7" : "female"}
	// },
	//
	//
	// 14 : {
	//
	// 	"question" : "Suffering from any other  Disorder? Yes or No",
	// 	"type" : {
	// 				"input" : "radio",
	// 				"options" : ["yes", "no"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {"7" : "female"}
	// },
	//
	//
	// 15 : {
	// 	"question" : "Tell me your Citizenship",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alpha",
	// 						"min" : "2",
	// 						"max" : "6"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 16 : {
	// 	"question" : "Are you a tax resident of any other country other than india? Yes or No",
	// 	"type" : {
	// 				"input" : "radio",
	// 				"options" : ["yes", "no"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 17 : {
	// 	"question" : "Address in the Jurisdictions details where applicant is Resident Outside India for tax purposes",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alphanum",
	// 						"min" : "1",
	// 						"max" : "90"
	// 					},
	// 	"pre" : {"16" : "yes"}
	// 	},
	//
	// 18 : {
	// 	"question" : "Tell me your Residential Status",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alphanum",
	// 						"min" : "1",
	// 						"max" : "20"
	// 					},
	// 	"pre" : {"16" : "yes"}
	// 	},
	//
	// 19 : {
	// 	"question" : "Tell me your Marital Status",
	// 	"type" : {
	// 				"input" : "dropdown",
	// 				"options" : ["married", "single", "divorced", "widowed"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 20 : {
	// 	"question" : "Tell me your Address",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alphanum",
	// 						"min" : "1",
	// 						"max" : "90"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 21 : {
	// 	"question" : "Tell me your Contact Number",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "num",
	// 						"min" : "10",
	// 						"max" : "15"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 22 : {
	// 	"question" : "Tell me your Email Address",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "email",
	// 						"min" : "3",
	// 						"max" : "30"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 23 : {
	// 	"question" : "Tell me your Pan Number",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "alphanum",
	// 						"min" : "10",
	// 						"max" : "10"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 24 : {
	// 	"question" : "Tell me your Aadhar Number",
	// 	"type" : {
	// 				"input" : "text",
	// 			},
	// 	"validation" : {
	// 						"type" : "num",
	// 						"min" : "12",
	// 						"max" : "12"
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 25 : {
	// 	"question" : "What is your Education Qualification",
	// 	"type" : {
	// 				"input" : "dropdown",
	// 				"options" : ["graduate", "12th pass", "10th pass", "diploma", "below 10th pass", "post graduate and above"]
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 26 : {
	// 	"question" : "What is your Occupation",
	// 	"type" : {
	// 				"input" : "dropdown",
	// 				"options":['Service-Private Sector', 'Service-Public Sector', 'Service-Government Sector', 'Others-Professionals', 'Others-Self Employee','Other-Retired','B-Business','X-Not Categorized']
	// 			},
	// 	"validation" : {
	// 						"type" : "options",
	// 					},
	// 	"pre" : {}
	// 	},
	//
	// 	27 : {
	// 		"question" : "Name & Address of the Organization/Business",
	// 		"type" : {
	// 					"input" : "text",
	// 				},
	// 		"validation" : {
	// 							"type" : "alphanum",
	// 							"min" : "1",
	// 							"max" : "90",
	// 						},
	// 		"pre" : {}
	// 	},
	//
	// 	28 : {
	// 		"question" : "Name of Company",
	// 		"type" : {
	// 					"input" : "text",
	// 					"options" : []
	// 				},
	// 		"validation" : {
	// 							"type" : "alpha",
	// 							"min" : "1",
	// 							"max" : "20"
	// 						},
	// 		"pre" : {}
	// 	},
	//
	// 	29 : {
	// 		"question" : "Exact Nature of Duties",
	// 		"type" : {
	// 					"input" : "text",
	// 					"options" : []
	// 				},
	// 		"validation" : {
	// 							"type" : "alpha",//_with_space
	// 							"min" : "1",
	// 							"max" : "30"
	// 						},
	// 		"pre" : {}
	// 	},
	//
	// 	30 : {
	// 		"question" : "Designation",
	// 		"type" : {
	// 					"input" : "text",
	// 					"options" : []
	// 				},
	// 		"validation" : {
	// 							"type" : "alpha",//NA
	// 							"min" : "0",
	// 							"max" : "30"
	// 						},
	// 		"pre" : {}
	// 	},
	//
	//
	// 	31 : {
	// 		"question" : "Years of Service/Business",
	// 		"type" : {
	// 					"input" : "text",
	// 					"options" : []
	// 				},
	// 		"validation" : {
	// 							"type" : "num",
	// 							"min" : "0",
	// 							"max" : "99"
	// 						},
	// 		"pre" : {}
	// 	},
	//
	//
	// 	32 : {
	// 		"question" : "Annual Gross Income (in Rs.)",
	// 		"type" : {
	// 					"input" : "text",
	// 					"options" : []
	// 				},
	// 		"validation" : {
	// 							"type" : "num",
	// 							"min" : "1",
	// 							"max" : "11"
	// 						},
	// 		"pre" : {}
	// 	},
	//
	// 	33 : {
	// 		"question" : "What is your Purpose of Insurance",
	// 		"type" : {
	// 					"input" : "text",
	// 				},
	// 		"validation" : {
	// 							"type" : "alphanum",
	// 							"min" : "0",
	// 							"max" : "100"
	// 						},
	// 		"pre" : {}
	// 		},
}

$form2 = {
		1 : {
			"question" : "Is Proposed Insured and Proposed holder different? Yes or No ",
			"type" : {
						"input" : "radio",
						"options" : ["yes", "no"]
					},
			"validation" : {
								"type" : "radio",
								"min" : "2",
								"max" : "3"
							},
			"pre" : {}
			},

		2 : {
			"question" : "What is your Name?",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",
								"min" : "1",
								"max" : "30"
							},
			"pre" : {"1": "yes"}
			},

		3 : {
			"question" : "What is your Father's Name?",
			"type" : {
						"input" : "text",
						"options" : []

					},
			"validation" : {
								"type" : "alpha",
								"min" : "1",
								"max" : "30"
							},
			"pre" : {"1": "yes"}
		},

		4 : {
			"question" : "What is your Mother's Name?",
				"type" : {
							"input" : "text",
							"options" : []
						},
				"validation" : {
									"type" : "alpha",
									"min" : "1",
									"max" : "30"
								},
				"pre" : {"1": "yes"}
			},

		5 : {
			"question" : "What is your Spouse Name?",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",
								"min" : "1",
								"max" : "30"
							},
			"pre" : {"1": "yes"}
		},

		6 : {
			"question" : "Tell me your Date of Birth?",
			"type" : {
						"input" : "date",
						"options" : []
					},
			"validation" : {
								"type" : "date",
								"min" : "10",
								"max" : "10"
							},
			"pre" : {"1": "yes"}
			},

		7 : {
			"question" : "Tell me your Place of Birth along with country Name",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",
								"min" : "0",
								"max" : "30"
							},
			"pre" : {"1": "yes"}
			},

		8 : {
			"question" : "Tell me your Gender",
			"type" : {
						"input" : "radio",
						"options" : ["male", "female"],
						"images" : ["male.png", "female.png"]
					},
			"validation" : {
								"type" : "radio"

							},
			"pre" : {"1": "yes"}
			},


		9 : {
			"question" : "Tell me your Marital Status",
			"type" : {
						"input" : "dropdown",
						"options" : ["married", "single", "divorced", "widowed"]
					},
			"validation" : {
								"type" : "dropdown",
								"min" : "1",
								"max" : "15"
							},
			"pre" : {"1": "yes"}
			},


		10 :{
			"question" : "Relationship with the Proposed Insured",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",
								"min" : "1",
								"max" : "30"
							},
			"pre" : {"1": "yes"}
		},


		11 : {
			"question" : "Tell me your Citizenship",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",
								"min" : "1",
								"max" : "6"
							},
			"pre" : {"1": "yes"}
			},

		12 : {
			"question" : "Are you a tax resident of any other country other than india? Yes or No",
			"type" : {
						"input" : "radio",
						"options" : ["yes", "no"]
					},
			"validation" : {
								"type" : "radio",
								"min" : "2",
								"max" : "3"
							},
			"pre" : {"1": "yes"}
			},

		13 : {

			"question" : "Address in the Jurisdictions details where applicant is Resident Outside India for tax purposes",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alphanum",
								"min" : "2",
								"max" : "3"
							},
			"pre" : {"12" : "yes"}
			},

		14 : {

			"question" : "Tell me your Residential Status",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alphanum",
								"min" : "1",
								"max" : "20"
							},
			"pre" : {"12": "yes"}
			},



		15 : {

			"question" : "Tell me your Address",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alphanum",
								"min" : "1",
								"max" : "90"
							},
			"pre" : {"1": "yes"}
			},

		16 : {
			"question" : "Tell me your Contact Number",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "num",
								"min" : "10",
								"max" : "15"
							},
			"pre" : {"1": "yes"}
			},

		17 : {
			"question" : "Tell me your Email Address",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "email",
								"min" : "3",
								"max" : "30"
							},
			"pre" : {"1": "yes"}
			},

		18 : {

			"question" : "Tell me your Pan Number",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alphanum",
								"min" : "10",
								"max" : "10"
							},
			"pre" : {"1": "yes"}
			},

		19 : {
			"question" : "Tell me your Aadhar Number",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "num",
								"min" : "12",
								"max" : "12"
							},
			"pre" : {"1": "yes"}
			},


		20 : {
			"question" : "What is your Education Qualification",
			"type" : {
						"input" : "dropdown",
						"options" : ["graduate", "12th pass", "10th pass", "diploma", "below 10th pass", "post graduate and above"]
					},
			"validation" : {
								"type" : "dropdown",
								"min" : "0",
								"max" : "20"
							},
			"pre" : {"1": "yes"}
			},

		21 : {
			"question" : "What is your Occupation",
			"type" : {
						"input" : "dropdown",
						"options" : ['Service-Private Sector', 'Service-Public Sector', 'Service-Government Sector', 'Others-Professionals', 'Others-Self Employee','Other-Retired','B-Business','X-Not Categorized']
					},
			"validation" : {
								"type" : "dropdown",
								"min" : "3",
								"max" : "40"
							},
			"pre" : {"1": "yes"}
			},


}

$form3 = {
	1 : {

"question" : "What is your Name?",
"type" : {
			"input" : "text",
			"options" : []
		},
"validation" : {
					"type" : "alpha",
					"min" : "1",
					"max" : "30"
				},
"pre" : {"1": "no"}
},

2 : {

"question" : "Tell me your Date of Birth?",
"type" : {
			"input" : "date",
			"options" : []
		},
"validation" : {
					"type" : "date",
					"min" : "10",
					"max" : "10"
				},
"pre" : {"1": "no"}
},

3 : {

"question" : "Tell me your Gender",
"type" : {
			"input" : "radio",
			"options" : ["male", "female"],
			"images" : ["male.png", "female.png"]
		},
"validation" : {
					"type" : "radio",
					"min" : "1",
					"max" : "7"
				},
"pre" : {"1": "no"}
},

4 : {
		"question" : "Tell me your Marital Status",
"type" : {
			"input" : "dropdown",
			"options" : ["married", "single", "divorced", "widowed"]
		},
"validation" : {
					"type" : "dropdown",
					"min" : "1",
					"max" : "15"
				},
"pre" : {"1": "no"}
},


5 : {

"question" : "Tell me your Nationality",
"type" : {
			"input" : "text",
			"options" : []
		},
"validation" : {
					"type" : "alpha",
					"min" : "2",
					"max" : "6"
				},
"pre" : {"1": "no"}
},

6 : {

"question" : "Relationship with the Proposed Insured",
"type" : {
			"input" : "text",
			"options" : []
		},
"validation" : {
					"type" : "alpha",
					"min" : "1",
					"max" : "30"
				},
"pre" : {"1": "no"}
},

7 : {
"question" : "Nominee Share",
"type" : {
			"input" : "text",
			"options" : []
		},
"validation" : {
					"type" : "num",
					"min" : "0",
					"max" : "3"
				},
"pre" : {"1": "no"}
},

}

$forms = {
	1 : $form1,
	2 : $form2,
	3 : $form3,
}

$multiple3 = {
	1: {
			"question" : "Number of Nominees",
			"type" : {
						"input" : "text",
					},
			"validation" : {
								"type" : "num",
								"min" : "0",
								"max" : "3"
							},
		}
	}

$multiple4 =	{
	1 : {
				"id" : 401,
				"question" : "Number of Polices",
				"type" : {
							"input" : "text",
						},
				"validation" : {
									"type" : "num",
									"min" : "1",
									"max" : "3"
								},
			},
		}

$multiples = {
	3 : $multiple3,
	4 : $multiple4
}

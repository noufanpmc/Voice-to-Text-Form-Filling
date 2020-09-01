// Form A - Proposed Insured Details
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

	2 : {
		"question" : "What is your Father's Name?",
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

	3 : {
		"question" : "What is your Mother's Name?",
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

	4 : {
		"question" : "What is your Spouse Name?",
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

	5 : {
		"question" : "Tell me your Date of Birth?",
		"type" : {
					"input" : "date",
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {}
		},

	6 : {
		"question" : "Tell me your Place of Birth along with country Name",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "alpha",
							"min" : "0",
							"max" : "30"
						},
		"pre" : {}
		},

	7 : {
		"question" : "Tell me your Gender",
		"type" : {
					"input" : "radio",
					"options" : ["male", "female"],
					"images" : ["images/male.png", "images/female.png"]
				},
		"validation" : {
							"type" : "options"
						},
		"pre" : {}
		},

		//For Female Proposed Insured Only

	8 : {

		"question" : "Are you Pregnant? Yes or No",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"7" : "female"}
	},

	9 : {

		"question" : "Female Life isnured-Current month of pregnenecy ",
		"type" : {
					"input" : "dropdown",
					"options" : ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
				},
		"validation" : {
							"type" : "dropdown",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"84" : "yes"}
	},

	10 : {

		"question" : "Miscarriage-Have you delivered, undergone caesarian section, had any abortion or miscarriage? Yes or No",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"7" : "female"}
	},

	11 : {

		"question" : "If yes, please mention period elapsed since last ocassion",
		"type" : {
					"input" : "dropdown",
					"options" : ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
				},
		"validation" : {
							"type" : "dropdown",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"10" : "yes"}
	},

	12 : {

		"question" : "Disorder-Have you suffered / are suffering from any disorder of the breast or reproductive organs? Yes or No",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"7" : "female"}
	},


	13 : {

		"question" : "Suffering From any Pregrancy Complications? Yes or No",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"7" : "female"}
	},


	14 : {

		"question" : "Suffering from any other  Disorder? Yes or No",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"7" : "female"}
	},


	15 : {
		"question" : "Tell me your Citizenship",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "alpha",
							"min" : "2",
							"max" : "6"
						},
		"pre" : {}
		},

	16 : {
		"question" : "Are you a tax resident of any other country other than india? Yes or No",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "options",
						},
		"pre" : {}
		},

	17 : {
		"question" : "Address in the Jurisdictions details where applicant is Resident Outside India for tax purposes",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "alphanum",
							"min" : "1",
							"max" : "90"
						},
		"pre" : {"16" : "yes"}
		},

	18 : {
		"question" : "Tell me your Residential Status",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "alphanum",
							"min" : "1",
							"max" : "20"
						},
		"pre" : {"16" : "yes"}
		},

	19 : {
		"question" : "Tell me your Marital Status",
		"type" : {
					"input" : "dropdown",
					"options" : ["married", "single", "divorced", "widowed"]
				},
		"validation" : {
							"type" : "options",
						},
		"pre" : {}
		},

	20 : {
		"question" : "Tell me your Address",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "alphanum",
							"min" : "1",
							"max" : "90"
						},
		"pre" : {}
		},

	21 : {
		"question" : "Tell me your Contact Number",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "num",
							"min" : "10",
							"max" : "15"
						},
		"pre" : {}
		},

	22 : {
		"question" : "Tell me your Email Address",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "email",
							"min" : "3",
							"max" : "30"
						},
		"pre" : {}
		},

	23 : {
		"question" : "Tell me your Pan Number",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "alphanum",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {}
		},

	24 : {
		"question" : "Tell me your Aadhar Number",
		"type" : {
					"input" : "text",
				},
		"validation" : {
							"type" : "num",
							"min" : "12",
							"max" : "12"
						},
		"pre" : {}
		},

	25 : {
		"question" : "What is your Education Qualification",
		"type" : {
					"input" : "dropdown",
					"options" : ["graduate", "12th pass", "10th pass", "diploma", "below 10th pass", "post graduate and above"]
				},
		"validation" : {
							"type" : "options",
						},
		"pre" : {}
		},

	26 : {
		"question" : "What is your Occupation",
		"type" : {
					"input" : "dropdown",
					"options":['Service-Private Sector', 'Service-Public Sector', 'Service-Government Sector', 'Others-Professionals', 'Others-Self Employee','Other-Retired','B-Business','X-Not Categorized']
				},
		"validation" : {
							"type" : "options",
						},
		"pre" : {}
		},

		27 : {
			"question" : "Name & Address of the Organization/Business",
			"type" : {
						"input" : "text",
					},
			"validation" : {
								"type" : "alphanum",
								"min" : "1",
								"max" : "20"
							},
			"pre" : {}
		},

		28 : {
			"question" : "Name of Company",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",
								"min" : "1",
								"max" : "20"
							},
			"pre" : {}
		},

		29 : {
			"question" : "Exact Nature of Duties",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",//_with_space
								"min" : "1",
								"max" : "30"
							},
			"pre" : {}
		},

		30 : {
			"question" : "Designation",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "alpha",//NA
								"min" : "0",
								"max" : "30"
							},
			"pre" : {}
		},


		31 : {
			"question" : "Years of Service/Business",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "num",
								"min" : "0",
								"max" : "99"
							},
			"pre" : {}
		},


		32 : {
			"question" : "Annual Gross Income (in Rs.)",
			"type" : {
						"input" : "text",
						"options" : []
					},
			"validation" : {
								"type" : "num",
								"min" : "1",
								"max" : "11"
							},
			"pre" : {}
		},

		33 : {
			"question" : "What is your Purpose of Insurance",
			"type" : {
						"input" : "text",
					},
			"validation" : {
								"type" : "alphanum",
								"min" : "0",
								"max" : "100"
							},
			"pre" : {}
			},
}

// Form B - Proposed Holder Details(To be filled only if different from Proposed Insured)
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

// // Form C - Nominee Details(To be Filled Only if Propsed Inusred And Proposed Holder is same) and  Appointee Details
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


	// Appointee Details (To be filled only if the Nominee is a minor. (The Appointee must not be the Proposed Insured))

	8 : {

		"question" : "Is Nominee a minor? Yes or No ",
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

	9 : {

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
		"pre" : {"8": "yes"}
		},

	10 : {

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
		"pre" : {"8": "yes"}
		},

	11 : {

		"question" : "Tell me your Gender",
		"type" : {
					"input" : "radio",
					"options" : ["male", "female"],
					"images" : ["male.png", "female.png"]
				},
		"validation" : {
							"type" : "radio"
						},
		"pre" : {"8": "yes"}
		},

	12 : {

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
		"pre" : {"8": "yes"}
		},


	13 : {

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
		"pre" : {"8": "yes"}
		},

	14 : {

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
		"pre" : {"8": "yes"}
		},

	15 : {

		"question" : "Relationship with the Nominee",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {"8": "yes"}
	},
}

// Form D - Insurance Policy Details
// Details of Insurance policies & previous application forms of the proposed insured with PNB MetLife India Insurance
// company and other life insurance companies. Please do specify in Type of Policy column below if information includes
// details of existing standalone Cancer and/or Heart/Cardiac products

//In case the Proposed Insured is a minor/student provide the following details for the entire family.
//In case Proposed Insured is house wife provide the following details of husband.
$form4 = {
	1 : {

		"question" : "Have you taken any insurance from any company till now?Yes or No",
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

		"question" : "Relationship with Proposed Insured (Self, family member)",
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

		"question" : "Name of the Insurance Company",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha_with_space",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"1": "yes"}
	},

	4 : {

		"question" : "Policy or Application Number",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "8",
							"max" : "9"
						},
		"pre" : {"1": "yes"}
	},

	5 : {

		"question" : "Type of Policy",
		"type" : {
					"input" : "radio",
					"options" : ["Health", "Life"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "1",
							"max" : "15"
						},
		"pre" : {"1": "yes"}
	},


	6 : {

		"question" : "Existing Policy SA or Face Amount (Rupees.) Base +Term Rider",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "11"
						},
		"pre" : {"1": "yes"}
	},

	7 : {

		"question" : "Annualised Premium",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "11"
						},
		"pre" : {"1": "yes"}
	},

	8 : {

		"question" : "Year of Issue",
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

	9 : {

		"question" : "In force or lapsed or in case of revival, date of revival or pending",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"1": "yes"}
	},

	10 : {

		"question" : "Acceptance terms",
		"type" : {
					"input" : "radio",
					"options" : ["Standard", "With XRT"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"1": "yes"}
	},

	11 : {

		"question" : "Acceptance terms (Std./ with extra/ postponed/ declined/ withdrawn/restricted benefits)",
		"type" : {
					"input" : "dropdown",
					"options" : ["postponed", "declined", "withdrawn", "restricted benefits"]
				},
		"validation" : {
							"type" : "dropdown",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"1": "yes"}
	},
}

// Form - E  Family History and Medical Details & Medical Details of the Proposed Inusred
$form5 = {
	1 : {

		"question" : "Tell me Your Height in CMS?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {}
	},

	2 : {

		"question" : "Tell me Your Weight in KG?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {}
	},

	3 : {

		"question" : "What is your Relation to Proposed Insured Mother Father Brothers Sisters Spouse Children",
		"type" : {
					"input" : "dropdown",
					"options" : ["Mother", "Father","Brothers","Sisters", "Spouse","Children"]

				},
		"validation" : {
							"type" : "dropdown",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {}
	},

	4 : {

		"question" : "Is that person Alive or Not? Yes NO?",
			"type" : {
						"input" : "radio",
						"options" : ["Yes","No"]
					},
			"validation" : {
								"type" : "radio",
								"min" : "2",
								"max" : "3"
							},
			"pre" : {}
		},

	5 : {

		"question" : "What is their age?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {"4":"Yes"}
	},

	6 : {

		"question" : "What is their Health Details?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {"77":"Yes"}
		},

	7 : {
		"id" : 80,
		"question" : "What  is the Cause of Death",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {"77":"No"}
		},

	8 : {

		"question" : "What  is the Deceased age in years",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {"77":"No"}
		},


	// Medical Details

	9 : {

		"question" : "Health Details-Are you suffering from any pre-existing disease or condition such as Diabetes, blood pressure, liver problems, blood disorder, heart related ailments, cancer/tumor , kidney diseases, Hepatitis B /C, HIV infection, and related  conditions etc. ",
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

	10 : {

		"question" : "Have you been or are you suffering from any other illness, injury, disease condition or have undergone medical examination not mentioned in the above questions due to which you have abstained from work for more than 7 days? If yes, please provide details of the illness and the treatment /medication taken or being taken",
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

	11 : {
		"question" : "Health Details- Do you have any congenital defect, physical deformity/disability or handicap? Yes or No",
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
}

// Form F - Life Style & Personal Details of the Proposed Insured
$form6 = {
	1: {

		"question" : "Have you smoked or consumed tobacco or nicotine products in any form? Yes or No ",
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

		"question" : "Have you consumed in form of Cigar? Yes or No ",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"92" : "yes"}
	},

	3 : {

		"question" : "How many sticks or packets per day?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"93" : "yes"}
	},

	4 : {

		"question" : "For how many months have you been smoking as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"93" : "yes"}
	},

	5 : {
		"question" : "If stopped consuming, state date since when you stopped",
		"type" : {
					"input" : "date",
					"options" : []
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {"93" : "yes"}
	},

	6 : {

		"question" : "Have you consumed in form of Cigarette? Yes or No ",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"92" : "yes"}
	},

	7 : {

		"question" : "How many sticks or packets per day?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"97" : "yes"}
	},

	8 : {

		"question" : "For how many months have you been smoking as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"97" : "yes"}
	},

	9 : {

		"question" : "If stopped consuming, state date since when you stopped",
		"type" : {
					"input" : "date",
					"options" : []
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {"97" : "yes"}
	},


	10 : {

		"question" : "Have you consumed in form of Beedis? Yes or No ",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"92" : "yes"}
	},

	11 : {

		"question" : "How many sticks or packets per day?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"101" : "yes"}
	},

	12 : {

		"question" : "For how many months have you been smoking as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"101" : "yes"}
	},

	13 : {
		"question" : "If stopped consuming, state date since when you stopped",
		"type" : {
					"input" : "date",
					"options" : []
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {"101" : "yes"}
	},


	14 : {
		"question" : "Have you consumed in form of Gutkha or Pan masala? Yes or No ",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"92" : "yes"}
	},

	15 : {
		"question" : "How many packets per day?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"105" : "yes"}
	},

	16 : {

		"question" : "For how many months have you been consuming as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"105" : "yes"}
	},

	17 : {

		"question" : "If stopped consuming, state date since when you stopped",
		"type" : {
					"input" : "date",
					"options" : []
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {"105" : "yes"}
	},



	18 : {
		"question" : "Have you consumed Alcohol in the past 5 years?Yes No",
		"type" : {
					"input" : "radio",
					"options" : ["Yes","No"]

				},
		"validation" : {
							"type" : "alpha",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {}
	},

	19 : {

		"question" : "Have you consumed in form of Beer?",
		"type" : {
					"input" : "radio",
					"options" : ["Yes","No"]

				},
		"validation" : {
							"type" : "alpha",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"109":"Yes"}
	},

	20 : {

		"question" : "How many pint or ml per day?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"110":"Yes"}
	},

	21 : {
		"question" : "For how many months have you been driniking as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"110":"Yes"}
	},

	22 : {

		"question" : "If stopped consuming, state date since when you stopped?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"110":"Yes"}
	},


	23 : {
		"question" : "Have you consumed in form of Wine?",
		"type" : {
					"input" : "radio",
					"options" : ["Yes","No"]

				},
		"validation" : {
							"type" : "alpha",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"109":"Yes"}
	},

	24 : {
		"question" : "How many pint or ml per day?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"114":"Yes"}
	},

	25 : {
		"question" : "For how many months have you been driniking as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"114":"Yes"}
	},

	26: {

		"question" : "If stopped consuming, state date since when you stopped?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"114":"Yes"}
	},


	27: {
		"id" : 118,
		"question" : "Have you consumed in form of Liquor?",
		"type" : {
					"input" : "radio",
					"options" : ["Yes","No"]

				},
		"validation" : {
							"type" : "alpha",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"109":"Yes"}
	},

28:	{
		"id" : 119,
		"question" : "How many pint or ml per day?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"118":"Yes"}
	},

	29:{
		"id" : 120,
		"question" : "For how many months have you been driniking as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"118":"Yes"}
	},

	30:{
		"id" : 121,
		"question" : "If stopped consuming, state date since when you stopped?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"118":"Yes"}
	},



31:	{
		"id" : 122,
		"question" : "Have you consumed Narcotic Drugs in the past 5 years? Yes or No ",
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

	32:{
		"id" : 123,
		"question" : "Have you consumed in form of Marijuana? Yes or No ",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"122" : "yes"}
	},


	33:{
		"id" : 124,
		"question" : "How much in quantity?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"123" : "yes"}
	},

	34:{
		"id" : 125,
		"question" : "For how many months have you been smoking as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"123" : "yes"}
	},

	35:{
		"id" : 126,
		"question" : "If stopped consuming, state date since when you stopped",
		"type" : {
					"input" : "date",
					"options" : []
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {"123" : "yes"}
	},


	36:{
		"id" : 127,
		"question" : "Have you consumed in form of Cocaine? Yes or No ",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"122" : "yes"}
	},


	37:{
		"id" : 128,
		"question" : "How much in quantity?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"127" : "yes"}
	},

	38:{
		"id" : 129,
		"question" : "For how many months have you been consuming as mentioned above?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "3"
						},
		"pre" : {"127" : "yes"}
	},

	39:{
		"id" : 130,
		"question" : "If stopped consuming, state date since when you stopped",
		"type" : {
					"input" : "date",
					"options" : []
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {"127" : "yes"}
	},

	// Occupation Details

	40:{
		"id" : 131,
		"question" : "Is your occupation associated with any specific hazards (E.g. Mines, Explosives, Corrosive Chemicals and HTV Drivers, etc), please complete the respective Occupation Questionnaire. Yes or No ",
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

	41:{
		"id" : 132,
		"question" : "Are you employed in Armed, Para Military or Police Force, if Yes, please complete Armed Services Questionnaire. Yes or No ",
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

	42:{
		"id" : 133,
		"question" : "Have you ever been convicted of a criminal offence or do you have any criminal case or charge pending against you. Yes or No ",
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

	43:{
		"id" : 134,
		"question" : "Have you flown in the last two years or do you expect to fly in future either as a Student Pilot, Pilot, Crew Member Passenger in a Non-Commercial or Personal or Chartered Flight? If yes, please complete Aviation Questionnaire. (Please tick “No” if you are a fare-paying passenger in domestic/international airline). Yes or No ",
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

	44:{
		"id" : 135,
		"question" : "Do you engage in Automobile or Motor-cycle Racing, Skin or Scuba Diving, Skydiving or Professional Sports? If yes, please complete respective Avocation Questionnaire. Yes or No ",
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

	45:{
		"id" : 136,
		"question" : "Are you (PI/PO/PP) or your family member/close associate is politically exposed person (PEP*). If yes please fill the PEP Questionnaire. Yes or No ",
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

	46:{
		"id" : 137,
		"question" : "Is the Proposed Holder/Nominee/Premium Payer a Trust, charity, NGO or organisation receiving donations? Substance? Yes or No ",
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
}

// Form G - Product Details
$form7 = {
1:{
		"id" : 138,
		"question" : "What is your Product Name?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {}
	},

2:	{
		"id" : 139,
		"question" : "What is your Policy Term?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "2",
							"max" : "2"
						},
		"pre" : {}
	},

3:	{
		"id" : 140,
		"question" : "What is your Premium Payment Term?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},

4:	{
		"id" : 141,
		"question" : "What is your Modal Premium?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},

5:	{
		"id" : 142,
		"question" : "What is your Basic Sum Assured ?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},

6:	{
		"id" : 143,
		"question" : "What is your Premium Multiple?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "2",
							"max" : "2"
						},
		"pre" : {}
	},


7:	{
		"id" : 144,
		"question" : "What is your Plan or Benefit Option?",
		"type" : {
					"input" : "radio",
					"options" : ["Lumsum","Fixed Income"]

				},
		"validation" : {
							"type" : "alpha",
							"min" : "6",
							"max" : "12"
						},
		"pre" : {}
	},



8:	{
		"id" : 145,
		"question" : "What is the Return of Balance of Premium?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},


9:	{
		"id" : 146,
		"question" : "What is the Cover Option?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},

10:	{

		"id" : 147,
		"question" : "What is the Monthly Income?",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},

11:	{
		"id" : 148,
		"question" : "Return of Premiums?",
		"type" : {
					"input" : "radio",
					"options" : ["Yes","No"]

				},
		"validation" : {
							"type" : "alpha",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {}
	},

12:	{
		"id" : 149,
		"question" : "Frequency of premium payment",
		"type" : {
					"input" : "radio",
					"options" : ["Annual","Half Yearly","Monthly"]

				},
		"validation" : {
							"type" : "alpha",
							"min" : "6",
							"max" : "12"
						},
		"pre" : {}
	},


13:	{

		"id" : 150,
		"question" : "Annualised Premium Amount (Rupees.)",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "11"
						},
		"pre" : {}
	},

14:	{

		"id" : 151,
		"question" : "Enter Your Payment Mode",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "11"
						},
		"pre" : {}
	},

15:	{


		"id" : 152,
		"question" : "Enter Your Renewal premium Mode",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "11"
						},
		"pre" : {}
	},


16:	{


		"id" : 153,
		"question" : "Enter Your Renewal premium Amount",
		"type" : {
					"input" : "text",
					"options" : []

				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},
}

// Form H - Additional Information
//Details of initial Deposite
$form8 = {
1:	{
		"id" : 154,
		"question" : "Type of Deposite",
		"type" : {
					"input" : "radio",
					"options" : ["Online payment"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "1",
							"max" : "20"
						},
		"pre" : {}
	},

2:	{
		"id" : 155,
		"question" : "Instrument Number:",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},


3:	{
		"id" : 156,
		"question" : "Instrument Date:",
		"type" : {
					"input" : "date",
					"options" : []
				},
		"validation" : {
							"type" : "date",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {}
	},

4:	{
		"id" : 157,
		"question" : "Amount in Rupees:",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},

5:	{
		"id" : 158,
		"question" : "Name of the Bank & Branch",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},

6:	{
		"id" : 159,
		"question" : "Is Premiums paid by Others? Yes or No",
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

	//Please fill third party declaration form
7:	{
		"id" : 160,
		"question" : "Name of the other person?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {"159" : "yes"}
	},

8:	{
		"id" : 161,
		"question" : "Relationship to Proposed Holder?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "30"
						},
		"pre" : {"159" : "yes"}
	},

9:	{
		"id" : 162,
		"question" : "Annual Income of the Premium Payor ",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"159" : "yes"}
	},

10:	{
		"id" : 163,
		"question" : "PAN number of third party",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alphanum",
							"min" : "10",
							"max" : "10"
						},
		"pre" : {"159" : "yes"}
	},

11:	{
		"id" : 164,
		"question" : "Aadhaar Number of Third Party",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "12",
							"max" : "12"
						},
		"pre" : {"159" : "yes"}
	},

12:	{
		"id" : 165,
		"question" : "Account type of PO",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha_with_space",
							"min" : "1",
							"max" : "20"
						},
		"pre" : {}
	},

13:	{
		"id" : 166,
		"question" : "Account Number of PO",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "15"
						},
		"pre" : {}
	},

14:	{
		"id" : 167,
		"question" : "MICR Code:",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "9"
						},
		"pre" : {}
	},

15:	{
		"id" : 168,
		"question" : "IFSC Code:",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alphanum",
							"min" : "1",
							"max" : "12"
						},
		"pre" : {}
	},

16:	{
		"id" : 169,
		"question" : "PO Bank and Branch name?",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {}
	},
}

// Form J - Tax Status Questionnaire (To be filed by Proposed Holder)
$form9 = {
1:	{
		"id" : 172,
		"question" : "Do you have an / a: United States citizenship or resident status (resident status applies in the event of the Applicant being an individual or an entity created, incorporated or governed by United States Laws). Yes or No",
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

2:	{
		"id" : 173,
		"question" : "US place of birth",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "alpha",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"172" : "yes"}
	},

3:	{
		"id" : 174,
		"question" : " US telephone number",
		"type" : {
					"input" : "text",
					"options" : []
				},
		"validation" : {
							"type" : "num",
							"min" : "1",
							"max" : "10"
						},
		"pre" : {"172" : "yes"}
	},

4:	{
		"id" : 175,
		"question" : " US residence or correspondence address (including a US PO Box)",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"172" : "yes"}
	},

5:	{
		"id" : 176,
		"question" : "Standing Instruction to transfer fund to us",
		"type" : {
					"input" : "radio",
					"options" : ["yes", "no"]
				},
		"validation" : {
							"type" : "radio",
							"min" : "2",
							"max" : "3"
						},
		"pre" : {"172" : "yes"}
	},
}

$forms = {
	1 : $form1,
	2 : $form2,
	3 : $form3,
	4 : $form4,
	5 : $form5,
	6 : $form6,
	7 : $form7,
	8 : $form8,
	9 : $form9,
}

// $forms = {
// 	1 : $form1,
// 	2 : $form1,
// 	3 : $form3,
// 	4 : $form3,
// 	5 : $form1,
// 	6 : $form1,
// 	7 : $form1,
// 	8 : $form1,
// 	9 : $form1,
// }

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

const data = {
  "Công việc": {
    "person": {
      "Job-seekers": "Applicants (người nộp đơn), Candidates (ứng viên), Job hunters (người săn việc)",
      "Workers": "Employees (nhân viên), Laborers (công nhân), Staff (nhân viên), Workforce (lực lượng lao động), Personnel (nhân sự)",
      "Advocates": "Supporters (người ủng hộ), Proponents (người đề xướng), Backers (người hậu thuẫn)",
      "Recruiters": "Headhunters (người săn đầu người), Talent scouts (người tìm kiếm tài năng), Hiring managers (quản lý tuyển dụng)",
      "Employers": "Bosses (sếp), Managers (quản lý), Business owners (chủ doanh nghiệp), Companies (công ty)",
      "Philanthropists": "Benefactors (nhà hảo tâm), Donors (người quyên góp), Patrons (người bảo trợ), Humanitarians (người nhân đạo)",
      "Senior citizens": "Elderly (người già), Older adults (người cao tuổi), Pensioners (người hưởng lương hưu), Retirees (người nghỉ hưu), Aged Individuals (người già)",
      "Young people": "Youth (thanh niên), Adolescents (vị thành niên), Teenagers (thiếu niên), Youngsters (thiếu niên)",
      "Students": "Pupils (học sinh), Learners (người học), Scholars (học giả), Undergraduates (sinh viên đại học)",
      "Parents": "Guardians (người giám hộ), Caregivers (người chăm sóc), Mothers and fathers (cha mẹ)",
      "Residents": "Inhabitants (cư dân), Occupants (người ở), Dwellers (người cư trú), Locals (người địa phương)",
      "Government": "Authorities (chính quyền), Officials (quan chức), Administration (chính phủ), Regulators (cơ quan quản lý)",
      "Managers": "Supervisors (giám sát viên), Directors (giám đốc), Administrators (người quản lý), Executives (giám đốc điều hành)",
      "Professionals": "Experts (chuyên gia), Specialists (chuyên viên), Practitioners (người hành nghề)",
      "Colleagues": "Coworkers (đồng nghiệp), Peers (bạn đồng trang lứa), Associates (cộng sự)"
    },
    "verbObject": {
      "Pursue a career - Theo đuổi sự nghiệp": "Climb the career ladder - Leo lên nấc thang sự nghiệp\nPursue a higher status - Theo đuổi địa vị cao hơn",
      "Make informed decisions - Đưa ra quyết định sáng suốt": "Make well-judged choices, Make educated decisions (Đưa ra quyết định sáng suốt)",
      "Achieve balance - Đạt được sự cân bằng": "Attain equilibrium, Reach a state of balance (Đạt được sự cân bằng), Strike a balance - Đạt được sự cân bằng",
      "Strive for excellence - Cố gắng để đạt được sự xuất sắc": " Aim for perfection, Pursue high standards (Cố gắng để đạt được sự xuất sắc)",
      "Complete tasks - Hoàn thành nhiệm vụ": "Finish assignments, Accomplish duties (Hoàn thành nhiệm vụ)",
      "Go above and beyond - Làm vượt mức yêu cầu": "Exceed expectations, Surpass requirements (Làm vượt mức yêu cầu)",
      "Foster enthusiasm - Nuôi dưỡng sự nhiệt huyết": "Cultivate excitement, Encourage passion (Nuôi dưỡng sự nhiệt huyết)",
      "Give rise to + vấn đề - Gây ra vấn đề gì": "Cause, Lead to (Gây ra)",
      "Appreciate working situation - Trân trọng môi trường làm việc": "Value work scenario, Recognize job circumstance (Trân trọng môi trường làm việc)",
      "Reduce stress - Giảm căng thẳng": "Lower stress levels, Alleviate tension (Giảm căng thẳng)",
      "Miss out on opportunities - Bỏ lỡ cơ hội": "Lose chances, Forfeit opportunities (Bỏ lỡ cơ hội)",
      "Adapt to circumstances - Thích nghi với hoàn cảnh": "Adjust to situations, Conform to conditions (Thích nghi với hoàn cảnh)",
      "Factor in + sự việc - Cân nhắc đến": "Take into account + N, Consider + N(Cân nhắc đến)",
      "Contribute to + N - Đóng góp vào": "Add to",
      "Devote to charity - Cống hiến cho từ thiện": "Commit to charitable work, Dedicate to philanthropy (Cống hiến cho từ thiện)",
      "Commit illegal acts - Thực hiện các hành vi phạm pháp": "Engage in unlawful activities, Perform illegal actions (Thực hiện các hành vi phạm pháp)",
      "Encounter several discomforts - Gặp phải nhiều sự khó chịu": "Experience various inconveniences (Gặp phải nhiều sự khó chịu)",
      "Land a job - Có được công việc": "Secure jobs - Đảm bảo công việc",
      "Acquire a wide range of skills - Tích luỹ được nhiều kỹ năng": "Gain diverse abilities, Develop multiple competencies (Đạt được nhiều kỹ năng)",
      "Offer more flexibility - Cung cấp nhiều sự linh hoạt hơn": "Provide greater adaptability, Grant more flexibility (Cung cấp nhiều sự linh hoạt hơn)",
      "Postpone their dream job - Hoãn lại công việc mơ ước": "Delay their ideal career, Defer their dream position (Hoãn lại công việc mơ ước)",
      "Relocate facilities - Di chuyển các cơ sở vật chất": "Thay relocate bằng move hoặc transfer",
      "Enhance the standard of living - Nâng cao mức sống": "Improve living conditions, Raise living standards (Nâng cao mức sống)",
      "Introduce talent recognition policies - Giới thiệu các chính sách công nhận tài năng": "Talent Acknowledgement - Công nhận tài năng, Recognize unique strengths - Nhận ra những điểm mạnh độc đáo",
      "Develop robust retirement programs - Phát triển các chương trình hưu trí vững chắc": "Create strong pension plans, Formulate solid retirement schemes (Phát triển các chương trình hưu trí vững chắc)",
      "Hinder career advancement - Cản trở sự thăng tiến trong sự nghiệp": "Impede professional progress, Obstruct career growth (Cản trở sự thăng tiến trong sự nghiệp)",
      "Provide incentives - Cung cấp các ưu đãi": "Offer rewards (Cung cấp các ưu đãi)",
      "Pour more capital - Đổ thêm vốn": "Invest more funds, Allocate additional resources (Đổ thêm vốn)",
      "Raise workers\u0027 retention - Tăng cường khả năng giữ chân nhân viên": "Boost worker loyalty (Tăng cường sự trung thành của nhân viên)",
      "Execute measures - Thực hiện các biện pháp": "Implement actions, Carry out steps (Thực hiện các biện pháp)",
      "Evaluate the possibility - Đánh giá khả năng": "Assess the feasibility, Consider the potential (Đánh giá khả năng)"
    },
    "adjObject": {
      "Stable employment": "Secure employment, Steady job (Việc làm ổn định)",
      "Pragmatic choice": "Practical decision, Realistic option (Lựa chọn thực tế)",
      "Career path": "Professional route, Vocational track (Con đường sự nghiệp)",
      "Fierce competition": "Intense competition, Strong rivalry (Cạnh tranh khốc liệt)",
      "Low retention rate": "Poor retention rate, Low employee retention (Tỷ lệ giữ chân nhân viên thấp)",
      "Work inertia": "Job stagnation, Work stagnation (Trì trệ công việc)",
      "Personal growth": "Self-development, Individual growth (Sự phát triển cá nhân)",
      "Unexpected life events": "Unforeseen life events, Unanticipated life events (Sự kiện cuộc sống bất ngờ)",
      "Financial stability": "Economic stability, Monetary stability (Ổn định tài chính)",
      "Retirement plans": "Pension plans, Retirement schemes (Kế hoạch hưu trí)",
      "Job prospects": "Employment prospects, Career prospects (Triển vọng công việc)",
      "Promotional opportunities": "Advancement opportunities, Career advancement (Cơ hội thăng tiến)",
      "Work-life balance": "life harmony (Cân bằng cuộc sống và công việc)",
      "Educational opportunities": "Learning opportunities, Educational prospects (Cơ hội giáo dục)",
      "Job market": "Employment market, Labor market (Thị trường việc làm)",
      "Economic growth": "Economic development, Economic expansion (Tăng trưởng kinh tế)",
      "Government services": "Public services, State services (Dịch vụ chính phủ)",
      "Financial instability": "Economic instability, Monetary instability (Bất ổn tài chính)",
      "Rural areas": "Countryside areas, Rural regions (Khu vực nông thôn)"
    }
  },
  "Giáo dục": {
    "person": {
      "Parents": "Guardians, Caregivers",
      "Students": "Learners, Pupils",
      "Teachers": "Educators, Instructors",
      "Children": "Kids, Youngsters",
      "Undergraduates": "College students, University students",
      "Lecturers": "Professors, Instructors",
      "Peers": "Classmates, Friends",
      "Young audiences": "Youthful viewers",
      "Teenagers": "Adolescents, Teens"
    },
    "verbObject": {
      "Sponsor the educational fees": "Fund tuition costs, Cover education expenses",
      "Waiving the tuition fees": "Abolishing tuition charges, Exempting education fees",
      "Take on a student loan": "Obtain an education loan, Secure student financing",
      "Have access to higher education": "Gain entry to tertiary education, Obtain admission to university",
      "Bear the financial responsibility": "Shoulder the cost, Assume the financial burden",
      "Take their studies seriously": "Prioritize their education, Focus on their academics",
      "Promote social equality": "Foster educational equity, Encourage equal opportunities",
      "Achieve excellent academic performance": "Attain high grades, Secure top marks",
      "Develop socially": "Grow interpersonally, Enhance social skills",
      "Pursue a degree": "Enroll in a course of study, Undertake a college program",
      "Adapt to unexpected life events": "Adjust to unforeseen changes, Cope with unplanned situations",
      "Broaden their social circle": "Expand their network, Increase their friends",
      "Propel them to success": "Drive them towards achievement, Push them to excellence",
      "Save a great amount of money": "Conserve funds, Reduce expenses",
      "Self-study at home": "Learn independently, Study on their own",
      "Experience technical difficulties": "Encounter tech issues, Face digital problems",
      "Hinder the learners’ ability": "Impede students’ capacity, Obstruct their potential",
      "Cause frustration for both parties": "Lead to mutual irritation, Result in shared exasperation",
      "Force children to learn": "Compel kids to study, Mandate education for youngsters",
      "Create well-rounded individuals": "Develop versatile people, Shape holistic learners",
      "Attend private tutoring sessions": "Participate in extra classes, Enroll in additional lessons",
      "Develop suicidal thoughts": "Experience self-harm ideation, Have depressive inclinations",
      "Develop vision impairments": "Suffer from eyesight issues, Get ocular problems",
      "Make education compulsory": "Mandate schooling, Require attendance",
      "Skipping school": "Missing classes, Absent from school",
      "Alleviate the job prospects": "Improve career opportunities, Enhance employment potential",
      "Promote personal growth": "Encourage self-development, Foster individual advancement",
      "Acquire knowledge": "Obtain information, Absorb Contents"
    },
    "adjObject": {
      "Educational fees": "Tuition costs, School charges",
      "Financial responsibility": "Monetary obligation, Fiscal duty",
      "Lower-income families": "Economically disadvantaged households, Financially struggling families",
      "Educational opportunities": "Learning chances, Academic prospects",
      "Prohibitively expensive costs": "Excessively high expenses, Extremely costly charges",
      "Non-verbal communication": "Body language, Unspoken interaction",
      "Physical health": "Bodily well-being, Physiological condition",
      "Mental problems": "Psychological issues, Emotional difficulties",
      "Social equality": "Equal opportunity, Social fairness",
      "Social circle": "Group of friends, Network of acquaintances",
      "Educational resources": "Learning materials, Academic supplies",
      "Learning experience": "Educational journey, Study process",
      "Full-time curriculum": "Comprehensive schedule, All-day program"
    }
  },
  "Mối quan hệ": {
    "person": {
      "Parents": "Guardians, Caregivers",
      "Families": "Households, Relatives",
      "Family members": "Relatives, Kin, Siblings",
      "Children": "Kids, Youngsters",
      "Immigrants": "Migrants, Newcomers",
      "Friends": "Companions, Pals",
      "Caretakers": "Caregivers, Nannies",
      "Couples": "Partners, Spouses",
      "Spouses": "Partners, Husbands/Wives",
      "Single-moms": "Solo mothers, Unwed mothers",
      "Significant other": "Partner, Loved one",
      "Males and females": "men and women, both genders, both sexes"
    },
    "verbObject": {
      "Go and work in other countries": "Move abroad for work, Relocate internationally for employment",
      "Take their families with them": "Bring their families along, Move with their families",
      "Seek career opportunities overseas": "Pursue job prospects abroad, Look for employment in foreign countries",
      "Immigrate along with their families": "Relocate with their households, Move abroad with their loved ones",
      "Send their children to higher-quality schools": "Enroll their kids in better schools, Place their children in top-tier educational institutions",
      "Make friends": "Form friendships, Establish connections",
      "Adjust to a new school system": "Adapt to a different educational framework, Get used to a new academic environment",
      "Raise children": "Bring up kids, Nurture youngsters",
      "Teach children how to take care of themselves": "Educate kids on self-care, Instruct children on personal maintenance",
      "Share household duties": "Divide domestic chores, Split home responsibilities",
      "Bear the responsibilities for the families": "Shoulder family duties, Take on family obligations"
    },
    "adjObject": {
      "Quality of life": "Standard of living, Living conditions",
      "Cultural adjustments": "Cultural adaptations, Societal changes",
      "Language barriers": "Linguistic obstacles, Communication challenges",
      "Formative stage": "Developmental phase, Early growth period",
      "Healthy routines": "Beneficial habits, Positive practices",
      "Inappropriate behavior": "Misconduct, Unacceptable actions",
      "Well-rounded individuals": "Holistic people, Versatile persons",
      "Inappropriate content": "Unsuitable material, Offensive information",
      "Prohibitively expensive living costs": "Exorbitant living expenses, Excessively high living costs",
      "Hands-on experience": "Practical experience, Real-world practice",
      "Childcare techniques": "Child-rearing methods, Parenting skills",
      "Social norms": "Cultural standards, Societal expectations",
      "Prestigious seats of learning": "Renowned educational institutions, Esteemed schools"
    }
  },
  "Du lịch, văn hoá, ngôn ngữ": {
    "person": {
      "Immigrants": "Migrants, Newcomers",
      "Opponents": "Critics, Adversaries",
      "Tourists": "Travelers, Visitors",
      "Expatriates": "Expats, Foreign residents",
      "Scientists": "Researchers, Scholars",
      "Indigenous people": "Natives, Local inhabitants",
      "Authorities": "Officials, Government representatives",
      "Children": "Kids, Youngsters",
      "Tourism operators": "Travel agencies, Tour companies",
      "Language speakers": "Linguists, Language users"
    },
    "verbObject": {
      "Follow local traditions": "Adhere to local customs, Abide by local practices",
      "Preserve national identities": "Maintain cultural heritage, Protect national traditions",
      "Embrace a multicultural environment": "Accept diverse cultures, Welcome cultural diversity",
      "Express their homeland’s beliefs": "Demonstrate native customs, Exhibit traditional values",
      "Practice their deeply-rooted tradition": "Observe ancient customs, Follow long-standing practices",
      "Show sensitivity towards cultural norms": "Respect local customs, Acknowledge traditional practices",
      "Pick up the native language": "Learn the local language, Acquire the indigenous tongue",
      "Create employment opportunities": "Generate jobs, Provide work prospects",
      "Improve the income of families": "Increase household earnings, Boost family income",
      "Address social problems": "Tackle societal issues, Resolve community challenges",
      "Combat illiteracy": "Fight against ignorance, Eliminate educational deficits",
      "Cause respiratory problems for the locals": "Lead to breathing issues for residents, Result in lung problems for inhabitants",
      "Generate revenues for the community": "Produce income for locals, Bring in money for the community",
      "Cater to the expectations of tourists": "Meet visitor demands, Satisfy tourist preferences",
      "Integrate technology into displays": "Incorporate tech into exhibits, Use digital tools in presentations",
      "Promote cultural heritage": "Advocate for traditional culture, Support historical preservation",
      "Adopt sustainable practices": "Implement eco-friendly methods, Use green approaches",
      "Gain ground": "Become more widespread, Increase in popularity",
      "Displace others": "Replace other languages, Supersede alternative tongues"
    },
    "adjObject": {
      "Local traditions": "Native customs, Regional practices",
      "Personal beliefs": "Individual convictions, Private faiths",
      "Native language": "Indigenous tongue, Mother language",
      "Remote locations": "Isolated areas, Distant regions",
      "Tourism activities": "Travel operations, Vacation practices",
      "Delicate ecosystems": "Fragile environments, Sensitive habitats",
      "Cultural erosion": "Heritage loss, Tradition decay",
      "Historical sites": "Heritage landmarks, Ancient monuments",
      "Educational level": "Academic attainment, Learning standard",
      "Cultural diversity": "Ethnic variety, Heritage richness",
      "Historical monuments": "Ancient landmarks, Heritage structures"
    }
  },
  "Môi trường, năng lượng": {
    "person": {
      "Humankind": "Humanity, Mankind",
      "Scientists": "Researchers, Scholars",
      "Energy consumers": "Power users, Resource consumers",
      "Wildlife species": "Animal species, Fauna",
      "Rangers": "Wildlife wardens, Park guardians",
      "Corporations": "Companies, Businesses",
      "Environmentalists": "Conservationists, Eco-activists",
      "Policymakers": "Legislators, Decision-makers",
      "Future generations": "Descendants, Posterity",
      "Illegal poachers": "Unauthorized hunters, Wildlife traffickers",
      "Timber workers": "Loggers, Woodcutters",
      "Marine researchers": "Oceanographers, Marine scientists",
      "Energy sector workers": "Energy industry employees, Power sector professionals"
    },
    "verbObject": {
      "Exploit natural resources": "Utilize natural assets, Tap into environmental resources",
      "Enhance energy security": "Improve energy stability, Boost energy safety",
      "Reduce dependence on foreign imports": "Decrease reliance on overseas supplies, Lower reliance on external resources",
      "Support economic growth": "Foster economic development, Promote financial expansion",
      "Drive technological innovations": "Spur technological advancements, Propel tech progress",
      "Cause deforestation and pollution": "Lead to forest loss and contamination, Result in tree loss and environmental degradation",
      "Damage natural habitat": "Destroy wildlife environments, Harm ecological habitats",
      "Suffer significant damage": "Experience considerable harm, Endure extensive destruction",
      "Release waste into the ocean": "Discharge pollutants into the sea, Emit refuse into marine waters",
      "Generate revenues for the community": "Create income for the locals, Produce earnings for the community",
      "Combat illiteracy": "Fight against ignorance, Battle educational deficits",
      "Promote ecological sustainability": "Encourage environmental longevity, Advocate for eco-friendly practices",
      "Discharge toxic industrial byproducts": "Release harmful industrial waste, Emit dangerous manufacturing residues",
      "Implement stringent regulations": "Enforce strict rules, Apply rigorous laws",
      "Protect and restore natural habitats": "Safeguard and rejuvenate ecosystems, Preserve and rehabilitate wildlife areas",
      "Curb greenhouse gas emissions": "Reduce carbon emissions, Limit GHG outputs",
      "Promote renewable energy": "Encourage sustainable power, Advocate for green energy",
      "Trigger inflated prices": "Cause price surges, Lead to cost increases"
    },
    "adjObject": {
      "Pristine environments": "Untouched ecosystems, Unspoiled habitats",
      "Ever-increasing demand": "Constantly growing need, Continually rising requirement",
      "Fragile ecosystems": "Delicate environments, Vulnerable habitats",
      "Significant damage": "Major harm, Severe destruction",
      "Timely decisions": "Prompt choices, Quick resolutions",
      "Long-term impact": "Lasting effect, Extended influence",
      "Renewable energy": "Sustainable power, Green energy",
      "Environmental impact": "Ecological effect, Environmental consequence",
      "Socio-economic consequences": "Social and economic effects, Community and financial outcomes",
      "Finite resources": "Limited supplies, Non-renewable resources",
      "Resource scarcity": "Resource shortage, Supply deficit"
    }
  },
  "Truyền thông, quảng cáo": {
    "person": {
      "Journalists": "Reporters, correspondents",
      "Commentators": "Analysts",
      "Politicians": "Lawmakers, legislators",
      "Viewers": "Audience, spectators",
      "Advertisers": "Marketers, promoters",
      "Consumers": "Customers, buyers",
      "News media": "Journalism, press",
      "News outlets": "Newspapers, broadcasters"
    },
    "verbObject": {
      "Disseminating information": "Spreading news, distributing updates",
      "Keeping the public informed": "Keeping society updated, ensuring community awareness",
      "Shape public opinions": "Influence societal views, mold community perspectives",
      "Create an echo chamber": "Form an enclosed space of ideas, develop a feedback loop",
      "Monitor online activities": "Track internet behavior, observe digital actions",
      "Expose individuals to content": "Present people with information, introduce users to media",
      "Collect and analyze user data": "Gather and examine consumer information, harvest and study user details",
      "Tailor advertisements": "Customize ads, personalize commercials",
      "Monitor the online activities": "Track internet behavior, observe digital actions",
      "Suggest advertisements": "Recommend ads, propose commercials",
      "Use tracking technologies": "Employ monitoring tools, utilize surveillance systems",
      "Mine data": "Extract information, harvest details",
      "Making informed choices": "Making educated decisions, choosing wisely",
      "Make impulsive purchases": "Buy spontaneously, shop without thinking",
      "Promise unrealistic results": "Guarantee impossible outcomes, assure unlikely benefits"
    },
    "adjObject": {
      "Public interest": "Societal concern, community attention",
      "Sensational stories": "Dramatic tales, shocking reports",
      "Biased judgments": "Prejudiced opinions, partial views",
      "Sensationalism more than the truth": "Drama over accuracy, hype over facts",
      "Privacy concerns": "Confidentiality issues, data protection worries",
      "Intrusive tracking technologies": "Prying monitoring tools, invasive surveillance systems",
      "Manipulative tactics": "Controlling strategies, deceptive methods",
      "Privacy threats": "Confidentiality dangers, data security risks",
      "Informative choices": "Educated decisions, knowledgeable selections"
    }
  },
  "Sức Khoẻ": {
    "person": {
      "Scientists": "Researchers, experts",
      "Smokers": "Tobacco users, cigarette smokers",
      "Computer users": "Tech users, digital device users",
      "Game addicts": "Gaming enthusiasts, video game addicts"
    },
    "verbObject": {
      "Engage in unhealthy behaviors": "Participate in harmful activities, indulge in detrimental habits",
      "Counter the detrimental impact": "Combat the negative effects, mitigate the harmful consequences",
      "Perpetuate bad habits": "Maintain unhealthy routines, continue harmful practices",
      "Address challenges": "Tackle issues, confront problems",
      "Enact stringent policies": "Implement strict regulations, introduce tough laws",
      "Deter unhealthy behaviors": "Discourage harmful actions, prevent detrimental activities",
      "Promote healthy living": "Encourage a healthy lifestyle, advocate for well-being",
      "Adopt healthier habits": "Embrace better routines, cultivate beneficial practices"
    },
    "adjObject": {
      "Immediate consequences": "Instant results, direct outcomes",
      "Socio-cultural factors": "Social influences, cultural aspects"
    }
  },
  "Công Nghệ": {
    "person": {
      "Scientists": "Researchers, experts",
      "Humankind": "Humanity, mankind",
      "Users": "Consumers, operators",
      "Internet users": "Online users, netizens"
    },
    "verbObject": {
      "Achieve technological feats": "Accomplish technological milestones, attain technological breakthroughs",
      "Discharge pollution": "Emit pollutants, release contaminants",
      "Exacerbate environmental problems": "Worsen ecological issues, aggravate environmental concerns",
      "Adopt technological devices": "Embrace tech gadgets, integrate technology tools",
      "Enable communication": "Facilitate interaction, allow communication",
      "Bridge the gap": "Close the gap, connect the divide",
      "Make video calls": "Conduct video conferences, perform video chats",
      "Share moments": "Exchange experiences, broadcast memories",
      "Conceal imperfections": "Hide flaws, mask defects",
      "Induce isolation": "Cause loneliness, lead to seclusion",
      "Reduce paper waste": "Cut down on paper waste, minimize paper consumption",
      "Promote sustainability": "Encourage sustainability, advocate for environmental conservation"
    },
    "adjObject": {
      "Technological progress": "Technological advancement, tech development",
      "Colossal amount": "Massive quantity, huge volume",
      "Environmental threats": "Ecological dangers, environmental hazards",
      "Heavy reliance": "Strong dependence, significant reliance",
      "Growing adoption": "Increasing use, rising acceptance",
      "False online image": "Misleading digital persona, deceptive online profile",
      "Meaningful connections": "Significant relationships, important bonds",
      "Online friends": "Virtual companions, internet acquaintances",
      "Global accessibility": "Worldwide reach, universal access",
      "Cost-effective method": "Economical approach, budget-friendly technique"
    }
  },
  "Tội Phạm": {
    "person": {
      "Victims": "Survivors, sufferers",
      "Juvenile crimes": "Youth offenses, minor crimes",
      "Lawbreakers": "Offenders, criminals, wrongdoers",
      "Recidivists": "Repeat offenders, habitual criminals",
      "Gangs": "Criminal groups, mobs"
    },
    "verbObject": {
      "Commit serious crimes": "Perpetrate major offenses, carry out severe felonies",
      "Receive adult punishments": "Face adult sentencing, endure mature penalties",
      "Understand the magnitude": "Grasp the extent, comprehend the severity",
      "Suffer irreversible consequences": "Endure permanent effects, experience lasting impacts",
      "Show no remorse": "Display no regret, exhibit no guilt",
      "Dissuade young people": "Discourage youths, deter adolescents",
      "Serve a life sentence": "Complete a lifelong imprisonment, undergo a permanent incarceration",
      "Hand down a sentence": "Deliver a judgment, issue a verdict",
      "Receive a community service sentence": "Get assigned public service, be ordered to perform community work",
      "Pay a fine": "Settle a penalty, pay a financial charge",
      "Offer social support": "Provide community aid, deliver societal assistance"
    },
    "adjObject": {
      "Harsh punishments": "Severe penalties, strict sentences",
      "Juvenile prison sentence": "Youth detention term, minor incarceration",
      "Lenient penalty": "Mild punishment, soft sentence",
      "Multifaceted problem": "Complex issue, multi-dimensional challenge",
      "Irreversible consequences": "Permanent effects, lasting impacts",
      "Petty criminals": "Minor offenders, small-time lawbreakers",
      "Serious charges": "Major accusations, severe allegations",
      "Unpaid volunteer work": "Gratis community service, uncompensated social labor",
      "the legal system": "the judicial system, the court system"
    }
  },
  "Tiêu dùng": {
    "person": {
      "Wealthy individuals": "Affluent people, the rich",
      "Online shoppers": "E-commerce buyers, internet consumers",
      "Customers": "Clients, patrons, buyers, purchasers, consumers",
      "Collectors": "Enthusiasts, gatherers"
    },
    "verbObject": {
      "Own famous brands": "Possess well-known brands, acquire renowned labels",
      "Accumulate debt": "Incur financial obligations, amass liabilities",
      "Consume luxury items": "Purchase high-end goods, buy premium products, make a luxury purchase",
      "Save up for big-ticket items": "Reserve money for costly products, set aside funds for expensive goods",
      "Enjoy a sense of accomplishment": "Experience satisfaction, feel a sense of achievement",
      "Gain ground among consumers": "Increase popularity with buyers, become more favored by shoppers",
      "Access a vast array of products": "Browse a wide selection of goods, reach an extensive range of items",
      "Acquire an overall impression": "Gain a general understanding, form a comprehensive view",
      "Resort to ordering online": "Turn to internet purchasing, rely on e-commerce transactions"
    },
    "adjObject": {
      "Brand-conscious consumers": "Brand-aware buyers, brand-focused shoppers",
      "Luxury items": "High-end products, premium goods",
      "Prestigious brands": "Renowned labels, reputable companies",
      "High-quality products": "Superior items, top-notch goods",
      "Impulsive buying": "Spontaneous purchasing, unplanned shopping",
      "Global accessibility": "Worldwide availability, international reach",
      "Spending habits": "Consumption behaviors, spending patterns",
      "online shopping": "E-commerce, Internet shopping",
      "shopping at store": "In-store shopping, brick-and-mortar shopping"
    }
  }
}
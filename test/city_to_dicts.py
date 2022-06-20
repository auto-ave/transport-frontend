import itertools
import sys

CITIES = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Amravati",
    "Amritsar",
    "Asansol",
    "Aurangabad",
    "Bangalore",
    "Bareilly",
    "Belgaum",
    "Bhavnagar",
    "Bhilai",
    "Bhiwandi",
    "Bhopal",
    "Bhubaneswar",
    "Bijapur",
    "Bikaner",
    "Bilaspur",
    "Bokaro Steel City",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Dehradun",
    "Delhi",
    "Dhanbad",
    "Durgapur",
    "Erode",
    "Faridabad",
    "Firozabad",
    "Ghaziabad",
    "Goa",
    "Gorakhpur",
    "Gulbarga",
    "Guntur",
    "Gurgaon",
    "Guwahati",
    "Gwalior",
    "Hamirpur",
    "Hubli Dharwad",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Jalandhar",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Kakinada",
    "Kannur",
    "Kanpur",
    "Kochi",
    "Kolhapur",
    "Kolkata",
    "Kollam",
    "Kozhikode",
    "Kurnool",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Malappuram",
    "Mangalore",
    "Mathura",
    "Meerut",
    "Moradabad",
    "Mumbai",
    "Mysore",
    "Nagpur",
    "Nanded",
    "Nashik",
    "Nellore",
    "Noida",
    "Patna",
    "Pondicherry",
    "Pune",
    "Purulia Prayagraj",
    "Raipur",
    "Rajahmundry",
    "Rajkot",
    "Ranchi",
    "Rourkela",
    "Salem",
    "Sangli",
    "Shimla",
    "Siliguri",
    "Solapur",
    "Srinagar",
    "Surat",
    "Thiruvananthapuram",
    "Thrissur",
    "Tiruchirappalli",
    "Tiruppur",
    "Ujjain",
    "Vadodara",
    "Varanasi",
    "Vasai-Virar City",
    "Vellore",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
    "Thane",
    "Navi Mumbai",
    "Kalyan",
    "Andheri",
]


####
#### Single city type
####
for city in CITIES:
    citySmall = city.lower().replace(" ", "-")

    print({
        "path": f"car-transportation-in-{citySmall}",
        "title": f"Car Transport in {city} - Autoave",
        "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
        "pageHeading": f"Car Transportation in {city}",
    }, ",")


####
#### Two city type
####
# ordered_list = list(itertools.permutations(CITIES, 2))

# sys.stdout = open('output.txt', 'wt')

# for pair in ordered_list:
#     city1 = pair[0]
#     city2 = pair[1]


#     print({
#         "path": "car-transportation-in-bangalore",
#         "title": "Vehicle Transportation Service - Autoave",
#         "description": "We at Autoave take pride in our services. We are a team of highly qualified and experienced car and vehicle movers. We are here to help you with your car and vehicle transportation needs.",
#         "keywords": 'Car transportation service, Vehicle transportation service, Car carrier transport, Vehicle carrier transport, Vehicle shipping quote, Transport vehicle to another state, Car carrier transport',
#         "pageHeading": "Vehicle Transport across the country",
#     }, ',')

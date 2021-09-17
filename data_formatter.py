import pandas as pd
import json

# ---------------------------------

filename = "plotting lat long data.xlsx"

bus_stop_column_name = "bus_stop_name"
latitude_column = "latitude_current"
longitude_column = "longitude_current"
# ---------------------------------


# data loading

data = pd.read_excel(filename)

data_size = len(data)

data_array = []

bus_stops_list = list(data[bus_stop_column_name])
latitudes_list = list(data[latitude_column])
longitudes_list = list(data[longitude_column])

each_object = {bus_stop_column_name: bus_stops_list,
               latitude_column: latitudes_list, longitude_column: longitudes_list}


final_output = "var data = " + json.dumps(each_object)

fh = open("coordinate_data.js", "w")
fh.write(final_output)
fh.close()

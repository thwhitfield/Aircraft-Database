# -*- coding: utf-8 -*-
"""
Created on Sat Sep 28 16:06:33 2019

@author: thwhi
"""

#from itertools import permutations
#
#words = list(permutations('abcdefghi',5))
#words = [''.join(word) for word in words][:10000]

aircraft_companies = df_infoboxes['manufacturer'].value_counts()[:20].index.tolist()
aircraft_companies.remove('HOMEBUILT')
aircraft_companies_pattern = '|'.join(aircraft_companies)

aircraft_names = (df_infoboxes[df_infoboxes['aircraft_wikipage_title']
                  .str.contains(aircraft_companies_pattern)])

most_built_aircraft = df_specs_num.sort_values('number_built_qty',ascending=False)['aircraft']
most_built_aircraft = most_built_aircraft[:500].tolist()

brands = ['CESSNA','BOEING','LOCKHEED','SIRRUS','PIPER','PILATUS','DASSAULT',
          'AIRBUS','TEXTRON','GULFSTREAM','BOMBARDIER','EMBRAER','DOUGLAS',
          'CURTIS','WRIGHT','TUPOLEV','BRISTOL','FOKKER','NORTHROP',
          'NORTH AMERICAN','BEECHCRAFT','AVRO','BELL','GRUMMAN','SUPERMARINE',
          'REPUBLIC AVIATION','CONSOLIDATED AIRCRAFT','HAWKER','BEECH','VAN',
          'FAIRCHILD','DE HAVILLAND','YAKOVLEV','STINSON','EUROCOPTER',
          'MCDONNELL']

aircraft_names = df_specs_num[df_specs_num['aircraft'].str.contains(aircraft_companies_pattern)]
aircraft_names = aircraft_names['aircraft'].tolist()

import csv

with open('aircraft_names.csv','w',encoding='utf-8') as f:
    wr = csv.writer(f,quoting=csv.QUOTE_ALL)
    wr.writerow(aircraft_names)
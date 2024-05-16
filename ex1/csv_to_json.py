import csv
import re
import json

def csvToJson(row:list[str]):
    return { "idcontrato" : row[0],
           "nAnuncio" : row[1],
            "tipoprocedimento" : row[2], 
            "objectoContrato" : row[3], 
            "dataPublicacao":  row[4],
            "dataCelebracaoContrato" : row[5],
            "precoContratual" : row[6].replace(",","."),
            "prazoExecucao" : row[7] ,
            "NIPC_entidade_comunicante" : row[8] ,
            "entidade_comunicante": row[9],
            "fundamentacao" : row[10]
    }


with open('dataset.csv', 'r',encoding="utf-8") as csvfile:
    reader = csv.reader (csvfile, delimiter=';', quotechar='|')
    outList = []
    for row in reader:
        if len(row) == 11:
            if re.fullmatch(r"\d{8}",row[0]):
                outList.append(csvToJson(row))

    with open("dataset.json","w",encoding="utf-8") as jsonfile:
        json.dump(outList,jsonfile,indent=2)
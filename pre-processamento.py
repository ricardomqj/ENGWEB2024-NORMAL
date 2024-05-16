import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    data = []
    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        # Garantindo que o delimitador é corretamente identificado.
        # Podemos especificar o delimitador manualmente se necessário (e.g., delimitador=';').
        csv_reader = csv.DictReader(file, delimiter=';')
        for row in csv_reader:
            # Corrigindo campos com vírgula nos números para o formato correto.
            for key, value in row.items():
                if value and ',' in value and any(char.isdigit() for char in value):
                    # Convertendo formatos de número de '3.918,75' para '3918.75'
                    row[key] = value.replace('.', '').replace(',', '.')
            data.append(row)

    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)

# Caminho para os arquivos CSV e JSON.
input_csv_file = 'contratos2024.csv'
output_json_file = 'contratos2024.json'

# Executando a função para converter CSV para JSON
csv_to_json(input_csv_file, output_json_file)

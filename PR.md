#  Setup da base de dados

Primeiramente, executei um script chamado pre-processamento de forma a tranformar o dataset em formato csv num formato json, para depois ser importado para o container do docker e posteriormente efetuando um mongoimport posteriomente para uma database contratos e para uma coleção dentro da database contratos, chamada também contratos.

# Como executar 
1. Executar o script em python chamado pre-processamento.py.
2. Após dar import para o docker com o comando:
sudo docker cp contratos2024.jsonengweb2024-normal-a100066_mongodb_1:/tmp/, um container que já se encontrava previamente criado, 
3. Dentro desse container dei import do ficheiro json gerado para o mongodb com o seguinte comando:
mongoimport -d contratos -c contratos --file /tmp/contratos2024.json --jsonArray

# Respostas Textuais

# ENGWEB2024-NORMAL-A100066

## Questão 1.2.1

### Input
db.contratos.find().count()

### Output
36377

## Questão 1.2.2

### Input
db.contratos.find({ tipoprocedimento: "Ajuste Direto Regime Geral" }).count()


### Output
17067

## Questão 1.2.3

### Input
db.contratos.distinct("entidade_comunicante").sort()


### Output
[
  'A ARCIAL - Associação para Recuperação de Cidadãos Inadaptados de Oliveira do Hospital',
  'A Oficina Centro de Artes e Mesteres Tradicionais de Guimarães, CIPRL',
  'A. D. A. M. - Águas do Alto Minho, S. A.',
  'ABIMOTA - Associação Nacional das Indústrias de Duas Rodas, Ferragens, Mobiliário e Afins',
  'ABMG - Águas do Baixo Mondego e Gândara, E. I. M., S. A.',
  'AC, Águas de Coimbra, E. M.',
  'ACA - Associação Casa da Arquitectura',
  'ACAPORAMA - Associação de Casas do Povo da Região Autonoma da Madeira',
  'ACISO - Associação Empresarial Ourém - Fátima',
  'ACLEM - Arte, Cultura e Lazer, Empresa Municipal, E. M.',
  'ACPMR - Associação Cluster Portugal Mineral Resources',
  'AD ELO Associação de Desenvolvimento Local da Bairrada e Mondego',
  'ADAE - Associação de Desenvolvimento da Alta Estremadura',
  'ADC - Águas da Covilhã, E. M.',
  'ADD - Associação de Desenvolvimento do Dão',
  'ADEMINHO - Associação para o Desenvolvimento do Ensino Profissional do Alto Minho Interior',
  'ADENE - Agência para a Energia',
  'ADEPTOLIVA - Associação para o Desenvolvimento do Ensino Profissional dos Concelhos de Tábua, Oliveira do Hospital e Arganil',
  'ADER-AL - Associação para o Desenvolvimento do Espaço Rural do Norte do Alentejo',
  'ADICE - Associação para o Desenvolvimento Integrado da Cidade de Ermesinde',
  'ADIRN - Associação para o Desenvolvimento Integrado do Ribatejo Norte',
  'ADIST - Associação para o Desenvolvimento do Instituto Superior Técnico',
  'ADL - Associação de Desenvolvimento do Litoral Alentejano',
  'ADP - Águas de Portugal Internacional - Serviços Ambientais, S. A.',
  'ADRAT - Associação de Desenvolvimento da Região do Alto Tâmega',
  'ADREPES - Associação de Desenvolvimento Regional da Península de Setúbal',
  'ADRIMAG - Associação de Desenvolvimento Rural Integrado das Serras de Montemuro, Arada e Gralheira',
  'ADVID - Associação para o Desenvolvimento da Viticultura Duriense',
  'ADXTUR - Agência para o Desenvolvimento Turístico das Aldeias do Xisto',
  'AEBB - Associação Empresarial da Beira Baixa',
  'AECRM-Associação Empresarial Concelho Rio Maior',
  'AEPM - Associação Equiterapêutica do Porto e Matosinhos',
  'AER - Associação Empresarial de Resende',
  'AEVA - Associação para a Educação e Valorização da Região de Aveiro',
  'AGERE- Empresa de Águas Efluentes e Resíduos de Braga, E. M.',
  'AIDA Assoc Industrial Distrito de Aveiro',
  'AMARSUL - Valorização e Tratamento de Resíduos Sólidos, S. A.',
  'AMBILITAL - Investimentos Ambientais no Alentejo, E. I. M.',
  'AMBISOUSA - Empresa Intermunicipal de Tratamento e Gestão de Residuos Sólidos, E.I.M.',
  'AMC - Vouga Associação de Municípios do Carvoeiro - Vouga',
  'AMCAL - Associação de Municípios do Alentejo Central',
  'ANI - Agência Nacional de Inovação, S. A.',
  'APA - Administração do Porto de Aveiro, S. A.',
  'APCB - Associação de Paralisia Cerebral de Braga',
  'APCTP - Associação do Parque de Ciência e Tecnologia do Porto',
  'APCV - Associação de Paralisia Cerebral de Viseu',
  'APEPO-Associação Para o Ensino Profissional do Oeste',
  'APFF - Administração do Porto da Figueira da Foz, S. A.',
  'APIN EIM, SA',
  'APL / Administração do Porto de Lisboa, SA',
  'APPACDM DE LISBOA - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Coimbra - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Mirandela - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Portalegre - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Setúbal - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Soure',
  'APPACDM de Viana do Castelo - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM do Porto -Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPC - Associação do Porto de Paralisia Cerebral',
  'APPDA-Coimbra, Associação Portuguesa para as Perurbações do Desenvolvimento e Autismo de Coimbra',
  'APRAM - Administração dos Portos da Região Autónoma da Madeira, S. A.',
  'APS - Administração dos Portos de Sines e do Algarve, S. A.',
  'APSS ADMINISTRAÇÃO DOS PORTOS DE SETÚBAL E SESIMBRA S. A',
  'AQUANENA - Empresa Municipal de Águas e Saneamento de Alcanena, E. M., S. A.',
  'AR - Águas do Ribatejo, EIM, SA',
  'ARM - Águas e Resíduos da Madeira, S.A.',
  'AS - Empresa das Águas de Santarém, E. M, S. A.',
  'ASCUDT- Associação Sócio-Cultural dos Deficientes de Trás-os-Montes',
  'ASDOURO - Associação de Desenvolvimento do Ensino e Formação Profissional do Alto Douro',
  'ASSOL - Associação de Solidariedade Social de Lafões',
  'ATAHCA - Associação de Desenvolvimento das Terras Altas do Homem Cávado e Ave',
  'ATEC - Associação de Formação para a Indústria',
  'Activar - Associação de Cooperação da Lousã',
  'Actual Gest - Formação Profissional, L.da',
  'AdP - Águas de Portugal, SGPS, S.A',
  'AdP Energias - Energias Renováveis e Serviços Ambientais , S. A.',
  'AdP Valor - Serviços Ambientais, S. A.',
  'AdRA - Águas da Região de Aveiro, S. A.',
  'Administração Central do Sistema de Saúde, I. P.',
  'Administração Regional de Saúde de Lisboa e Vale do Tejo, I. P.',
  'Administração Regional de Saúde do Alentejo (ARSA)',
  'Administração Regional de Saúde do Alentejo, I. P.',
  'Administração Regional de Saúde do Algarve, I. P.',
  'Administração Regional de Saúde do Algarve, I.P.',
  'Administração Regional de Saúde do Centro, I. P.',
  'Administração Regional de Saúde do Centro,IP(ARSC)',
  'Administração Regional de Saúde do Norte, I. P.',
  'Administração Regional de Saúde do Norte,IP (ARSN)',
  'AgdA - Águas Públicas do Alentejo, S. A.',
  'Agrupamento Escolas de Colmeias',
  'Agrupamento Vertical de Canelas',
  'Agrupamento Vertical de Cristelo',
  'Agrupamento Vertical de Escolas de Almodôvar',
  'Agrupamento Vertical de Escolas de Arga e Lima',
  'Agrupamento Vertical de Escolas de Briteiros',
  'Agrupamento Vertical de Escolas de Freixo, Ponte de Lima',
  'Agrupamento Vertical de Escolas de Marco de Canaveses',
  'Agrupamento Vertical de Escolas de Paços de Ferreira',
  'Agrupamento Vertical de Escolas Álvaro Coutinho, O Magriço - Penedono',
  'Agrupamento Vertical de Perafita',
  ... 2121 more items
]

## Questão 1.2.4

### Input
db.contratos.aggregate([{ $group: { _id: "$tipoprocedimento", total: { $sum: 1}}}])

### Output
[
  { _id: 'Ao abrigo de acordo-quadro (art.º 258.º)', total: 995 },
  { _id: 'Concurso público', total: 5300 },
  { _id: 'Consulta Prévia Simplificada', total: 96 },
  {
    _id: 'Consulta prévia ao abrigo do artigo 7º da Lei nº 30/2021. de 2105',
    total: 1
  },
  { _id: 'Ajuste Direto Regime Geral', total: 17067 },
  { _id: 'Contratação excluída II', total: 144 },
  { _id: 'Ao abrigo de acordo-quadro (art.º 259.º)', total: 4678 },
  { _id: 'Concurso limitado por prévia qualificação', total: 53 },
  { _id: 'Concurso público simplificado', total: 3 },
  { _id: 'Procedimento de negociação', total: 1 },
  { _id: 'Setores especiais – isenção parte II', total: 39 },
  { _id: 'Consulta Prévia', total: 8000 }
]


## Questão 1.2.5

### Input
db.contratos.aggregate([
  { $group: { _id: "$entidade_comunicante", totalMontante: { $sum: { $toDouble: "$precoContratual" } } } }
])

### Output
[
  { _id: 'Ao abrigo de acordo-quadro (art.º 258.º)', total: 995 },
  { _id: 'Concurso público', total: 5300 },
  { _id: 'Consulta Prévia Simplificada', total: 96 },
  {
    _id: 'Consulta prévia ao abrigo do artigo 7º da Lei nº 30/2021. de 2105',
    total: 1
  },
  { _id: 'Ajuste Direto Regime Geral', total: 17067 },
  { _id: 'Contratação excluída II', total: 144 },
  { _id: 'Ao abrigo de acordo-quadro (art.º 259.º)', total: 4678 },
  { _id: 'Concurso limitado por prévia qualificação', total: 53 },
  { _id: 'Concurso público simplificado', total: 3 },
  { _id: 'Procedimento de negociação', total: 1 },
  { _id: 'Setores especiais – isenção parte II', total: 39 },
  { _id: 'Consulta Prévia', total: 8000 }
]
contratos> db.contratos.aggregate([
...   { $group: { _id: "$entidade_comunicante", totalMontante: { $sum: { $toDouble: "$precoContratual" } } } }
... ])
[
  {
    _id: 'Associação de Defesa do Idoso e Criança de Arentim',
    totalMontante: 3173995.18
  },
  { _id: 'Município de Constância', totalMontante: 231420.28 },
  {
    _id: 'Agrupamento de Escolas Manuel da Maia, Lisboa',
    totalMontante: 7500
  },
  {
    _id: 'Centro Social e Paroquial de Aveiras de Cima',
    totalMontante: 20916.59
  },
  {
    _id: 'Fundação de Nossa Senhora da Guia IPSS',
    totalMontante: 306780.11
  },
  { _id: 'Município de Paços de Ferreira', totalMontante: 3929712.61 },
  {
    _id: 'Agrupamento de Escolas de Paço de Arcos, Oeiras',
    totalMontante: 121742.92
  },
  { _id: 'Universidade do Porto', totalMontante: 2556093.86 },
  {
    _id: 'Mãe de Deus, Associação de Solidariedade Social',
    totalMontante: 26215.69
  },
  {
    _id: 'Associação Para O Desenvolvimento De Figueira',
    totalMontante: 2900
  },
  { _id: 'Freguesia da Misericórdia', totalMontante: 71100 },
  { _id: 'Cáritas Diocesana de Coimbra', totalMontante: 2880 },
  {
    _id: 'União das Freguesias de Santo António dos Cavaleiros e Frielas',
    totalMontante: 375648.99
  },
  {
    _id: 'AEBB - Associação Empresarial da Beira Baixa',
    totalMontante: 8360.85
  },
  { _id: 'Município de Cascais', totalMontante: 23020859.63 },
  {
    _id: 'Associação de Desenvolvimento das Regiões do Parque Nacional da Peneda Gerês - ADERE - Peneda Gerês',
    totalMontante: 19632.27
  },
  { _id: 'Etapas Pioneiras, Lda', totalMontante: 30000 },
  {
    _id: 'CATAA - Associação Centro de Apoio Tecnológico Agro-Alimentar de Castelo Branco',
    totalMontante: 6097.56
  },
  {
    _id: 'CEPRA - CENTRO DE FORMAÇÃO PROFISSIONAL REPARAÇÃO AUTOMOVEL',
    totalMontante: 163425.95
  },
  { _id: 'Município de Mértola', totalMontante: 1105764.49 }
]
Type "it" for more



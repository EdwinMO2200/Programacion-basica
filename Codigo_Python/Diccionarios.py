def run():
    mi_diccionario = {
        'llave1' : 1,
        'llave2' : 2,
        'llave3' : 3,
    }
    #print(mi_diccionario['llave1'])
    #print(mi_diccionario['llave2'])
    #print(mi_diccionario['llave3'])
    poblacion_pais = {
        'Argentina' : 4495659646,
        'Brasil' : 5454664,
        'Colombia' : 54565,
    }
    #print(poblacion_pais['Argentina'])


    for pais in poblacion_pais.keys():
        print(pais)

    for pais in poblacion_pais.values():
        print(pais)

    for pais, poblacion in poblacion_pais.items():
        print(pais + ' tiene ' + str(poblacion)+ ' habitantes')


if __name__ == '__main__':
    run()
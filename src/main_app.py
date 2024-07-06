from flask import Flask, render_template, request
import pandas as pd
import datetime
import os
import zipfile
import tempfile
def get_user_id():
    data = pd.read_excel("database\\userdata.xlsx", engine="openpyxl")
    userid=0
    for index, row in data.iterrows():
        if index:
            userid=index+1
        else:
            userid=0
    return userid
def data_check_into_database(fname,lname,email,password):
    check_condition="f"
    try:
        data = pd.read_excel("C:\\Users\\DEEPANSHU\\Documents\\all project\\ChatterBox\\database\\userdata.xlsx", engine="openpyxl")
        for index, row in data.iterrows():
            if (str(email) == str(row.loc['email']) and str(password) == str(row.loc['password']) and str(fname) == str(row.loc['f_name']) and str(lname) == str(row.loc['l_name'])):
                check_condition="t"
    except Exception as e:
        check_condition="Error : "+str(e)
    return check_condition
def store_data(user_id,f_name,l_name,email,password,image,currenttime):
    temp_variable=""
    try:
        database_name = pd.read_excel("database\\userdata.xlsx", engine="openpyxl")
        user_id_calculate=user_id
        record={"user_id":user_id_calculate,"f_name":f_name,"l_name":l_name,"email":email,"password":password,"image":image,"time":currenttime}
        df = pd.concat([database_name, pd.DataFrame([record])], ignore_index=True)
        df.to_excel('database\\userdata.xlsx', index=False)
        temp_variable="success"
    except zipfile.BadZipFile as e:
        temp_variable="Error : "+str(e)
    return temp_variable
def get_user_info(email,password,fname):
    getusername="A"
    getuserimage="pexels-pixabay-326055.jpg"
    list_1=[]
    try:
        data = pd.read_excel("C:\\Users\\DEEPANSHU\\Documents\\all project\\ChatterBox\\database\\userdata.xlsx", engine="openpyxl")
        for index, row in data.iterrows():
            if str(email) == str(row.loc['email']) and str(password) == str(row.loc['password']) and str(fname) == str(row.loc['f_name']):
                getusername=str(row.loc['f_name'])
                getuserimage=str(row.loc['image'])
            else:
                list_1.append([str(row.loc['image']),str(row.loc['f_name'])+" "+str(row.loc['l_name'])])
    except Exception as e:
        getusername="Error : "+str(e)
    return [getusername, getuserimage,list_1]
app = Flask(__name__)
@app.route('/')
def index():
    get_user_id()
    return render_template('index.html')
@app.route('/signin', methods=['POST'])
def signin():
    return render_template('index.html')
@app.route('/login', methods=['POST'])
def login():
    return render_template('login.html')
@app.route('/logout', methods=['POST'])
def logout():
    return render_template('index.html')
@app.route('/data', methods=['POST'])
def userdata():
    try:
        user_id=get_user_id()
        fname= request.form['fname']
        lname= request.form['lname']
        email= request.form['email']
        password= request.form['password']
        image = request.files['image']
        filename = image.filename
        file_name=filename.split('.')[0]+str(user_id)
        file_extension =filename.split('.')[1]
        if file_extension in ['jpg', 'jpeg','png']:
            pass
        else:
            return render_template('index.html',result="Image should be jpg,png,jpeg,png") 
        complete_filename=str(file_name)+"."+str(file_extension)
        folder = 'static\\images'
        file_path = os.path.join(folder, complete_filename)
        ctime=datetime.datetime.now()
        verify=data_check_into_database(fname,lname,email,password)
        if verify =="t":
            return render_template('index.html',result="Already Created") 
        elif verify=="f":
            store_check=store_data(user_id,fname,lname,email,password,file_path,ctime)
            if(store_check=="success"):
                image.save(file_path) 
                find_user_name=get_user_info(email,password,fname)
                return render_template('home.html',result=find_user_name)
            else:
                return render_template('index.html',result=store_check) 
        else:
            return render_template('index.html',result=verify) 
    except Exception as e:
        return render_template('index.html',result="Error: " + str(e)) 
@app.route('/process_hidden_value', methods=['post'])
def mpro():
    data = request.get_json()
    findusername=data['value']
    file_name="temp.txt"
    if os.path.exists(file_name):
        os.remove(file_name)
    else:
        pass
    with open(file_name, 'w') as file:
        file.write(findusername)
    return findusername
@app.route('/message', methods=['GET'])
def message():
    with open("temp.txt", 'r') as temp_file:
        data = temp_file.read()
    return render_template('messager.html',result=data)
@app.route('/checkdata', methods=['POST'])
def checkdata():
    fname= request.form['fname']
    lname= request.form['lname']
    email= request.form['email']
    password= request.form['password']
    verify_value=data_check_into_database(fname,lname,email,password)
    if verify_value=="t":
        find_user_name=get_user_info(email,password,fname)
        return render_template('home.html',result=find_user_name)
    elif verify_value=="f":
        return render_template('login.html', result="Wrong email or password...")
    else:
        return render_template('login.html', result=verify_value)
if __name__ == '__main__':
    app.run(debug=True)

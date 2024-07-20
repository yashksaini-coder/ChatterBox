from flask import Flask, render_template, request,jsonify,  send_from_directory 
import pandas as pd
import datetime
import json
import os
import zipfile
import re #rejex
import google.generativeai as genai
from markdown import markdown


def access_value(number):
    number_str = str(number)
    parts = number_str.split('.')
    fractional_part = parts[0]
    result = int(fractional_part)
    fractional_part1 = parts[1]
    result1 = int(fractional_part1)
    l_1=[str(result),str(result1)]
    return l_1


def excel_path():
    # path="C:\\Users\\DEEPANSHU\\Documents\\all project\\ChatterBox\\database\\userdata.xlsx"
    path="database\\userdata.xlsx"
    return path


def check_email(user_email):
    torf=""
    email_condition="^[a-z]+[\._]?[a-z 0-9]+[@]\w+[.]\w{2,3}$"  
    if (re.search(email_condition, user_email)):
        torf="t"
    else:
        torf="f"
    return torf


def get_user_id():
    path=excel_path()
    data = pd.read_excel(path, engine="openpyxl")
    empty_cells = data.isnull().values.any()
    userid=0
    if empty_cells:
        userid=0
    else:
        for index, row in data.iterrows():
            userid=index+1
    return userid


def data_check_into_database(fname,lname,email,password):
    check_condition="f"
    try:
        path=excel_path()
        data = pd.read_excel(path, engine="openpyxl")
        for index, row in data.iterrows():
            if (str(email) == str(row.loc['email']) and str(password).capitalize() == str(row.loc['password']).capitalize() and str(fname).capitalize() == str(row.loc['f_name']).capitalize() and str(lname).capitalize() == str(row.loc['l_name']).capitalize()):
                check_condition="t"
    except Exception as e:
        check_condition="Error : "+str(e)
    return check_condition


def store_data(user_id,f_name,l_name,email,password,image,currenttime):
    temp_variable=""
    try:
        path=excel_path()
        database_name = pd.read_excel(path, engine="openpyxl")
        user_id_calculate=user_id
        record={"user_id":user_id_calculate,"f_name":f_name,"l_name":l_name,"email":email,"password":password,"image":image,"time":currenttime}
        df = pd.concat([database_name, pd.DataFrame([record])], ignore_index=True)
        df.to_excel(path, index=False)
        temp_variable="success"
    except zipfile.BadZipFile as e:
        temp_variable="Error : "+str(e)
    return temp_variable


def get_user_info(email,password,fname,lname):
    getusername=None
    getuserimage=None
    main_user_id=None
    list_1=[]
    main_user_lastname=None
    try:
        path=excel_path()
        data = pd.read_excel(path, engine="openpyxl")
        for index, row in data.iterrows():
            if str(email) == str(row.loc['email']) and str(password) == str(row.loc['password']) and str(fname) == str(row.loc['f_name']) and str(lname) == str(row.loc['l_name']):
                getusername=str(row.loc['f_name'])
                getuserimage=str(row.loc['image'])
                main_user_id=str(row.loc['user_id'])
                main_user_lastname=str(row.loc['l_name'])
            else:
                list_1.append([str(row.loc['image']),str(row.loc['f_name'])+" "+str(row.loc['l_name']),index])
    except Exception as e:
        getusername="Error : "+str(e)
    return [getusername, getuserimage,list_1,main_user_id,main_user_lastname]

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(app.root_path, 'log_file/read_files')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


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
        fname=fname.capitalize()
        lname=lname.capitalize()
        email=email
        password=password.capitalize()
        file_name=filename.split('.')[0]+str(user_id)
        file_extension =filename.split('.')[1]
        c_email=check_email(email)
        if(c_email=="t"):
            pass
        else:
            return render_template('index.html',result="Wrong syntax for email") 
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
                find_user_name=get_user_info(email,password,fname,lname)
                return render_template('home.html',result=find_user_name)
            else:
                return render_template('index.html',result=store_check) 
        else:
            return render_template('index.html',result=verify) 
    except Exception as e:
        return render_template('index.html',result="Error: " + str(e)) 



@app.route('/ai', methods=['GET'])
def ai():
    return render_template('ai_index.html')



@app.route('/chat_ai', methods=['GET', 'POST'])
def chat_ai():
    genai.configure(api_key='AIzaSyChm6p9vwr24nt3ouDzJgrzedXiCpjWzM0')
    model = genai.GenerativeModel('gemini-pro')
    chat_model = model.start_chat(history=[])  
    if request.method == 'POST':
        query = request.json['query']
        if (len(query.strip()) == 0):
            return jsonify("Please enter something!")
        try:
            gemini_response = chat_model.send_message(
                query).text  
        except Exception:
            return jsonify("Something went wrong!")
        return jsonify(markdown(gemini_response))
    else:
        return render_template("chats.html")
    
    
@app.route('/message', methods=['GET'])
def message():
    return render_template('messager.html')



@app.route('/check-file/<filename>', methods=['GET'])
def check_file(filename):
    file_path = os.path.join("log_file", filename)
    if os.path.isfile(file_path):
        return jsonify({'exists': True})
    else:
        return jsonify({'exists': False})
    
    
    
@app.route('/create-empty-file/<filename>', methods=['POST'])
def create_empty_file(filename):
    file_path = os.path.join("log_file", filename)
    try:
        with open(file_path, 'w') as file:
            file.write('{}')  
        return jsonify({'success': True, 'message': f'File {filename} created successfully.'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})
    
    
    
@app.route('/log_file/<filename>', methods=['GET'])
def serve_file(filename):
    try:
        return send_from_directory("log_file", filename)
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    
    
    
@app.route('/write-json/<filename>', methods=['POST'])
def write_json(filename):
    file_path = os.path.join('log_file', filename)
    new_data = request.json

    try:
        if os.path.exists(file_path):
            with open(file_path, 'r+') as file:
                existing_data = json.load(file)
                existing_data.update(new_data)
                file.seek(0)
                json.dump(existing_data, file, indent=2)
                file.truncate()
        else:
            with open(file_path, 'w') as file:
                json.dump(new_data, file, indent=2)

        return jsonify({'success': True, 'message': f'File {filename} updated successfully.'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    
    
    
@app.route('/log_file/<filename>')
def serve_json(filename):
    return send_from_directory('log_file', filename)



@app.route('/report/<filename>')
def servecoment_json(filename):
    return send_from_directory('report', filename)



@app.route('/readcomment-json/<filename>', methods=['GET'])
def readcomment_json(filename):
    file_path = os.path.join("report", filename)
    if not os.path.exists(file_path):
        return jsonify({'success': False, 'message': 'File not found'}), 404
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return jsonify({'success': True, 'data': data})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    
    
    
@app.route('/writecomment-json/<filename>', methods=['POST'])
def writecomment_json(filename):
    file_path = os.path.join('report', filename)
    new_data = request.json
    try:
        if os.path.exists(file_path):
            with open(file_path, 'r+') as file:
                existing_data = json.load(file)
                existing_data.update(new_data)
                file.seek(0)
                json.dump(existing_data, file, indent=2)
                file.truncate()
        else:
            with open(file_path, 'w') as file:
                json.dump(new_data, file, indent=2)
        return jsonify({'success': True, 'message': f'File {filename} updated successfully.'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    
    
    
@app.route('/line-count-comment', methods=['GET'])
def line_count_comment():
    file_name = request.args.get('file')
    file_path = os.path.join('report', file_name)
    if os.path.exists(file_path):
        count = count_lines(file_path)
        return jsonify(count=count)
    else:
        return jsonify(error="File not found"), 404
    
    
    
@app.route('/second-last-line-comment', methods=['GET'])
def second_last_line_comment():
    file_name = request.args.get('file')
    file_path = os.path.join('report', file_name)
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            lines = file.readlines()
        second_last_line = lines[-2] if len(lines) > 1 else None
        return jsonify(second_last_line=second_last_line)
    else:
        return jsonify(error="File not found"), 404
    
    
    
@app.route('/readlike-json/<filename>', methods=['GET'])
def readlike_json(filename):
    file_path = os.path.join("report", filename)
    if not os.path.exists(file_path):
        return jsonify({'success': False, 'message': 'File not found'}), 404
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return jsonify({'success': True, 'data': data})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    
    
    
@app.route('/writelike-json/<filename>', methods=['POST'])
def writelike_json(filename):
    file_path = os.path.join('report', filename)
    new_data = request.json
    try:
        if os.path.exists(file_path):
            with open(file_path, 'r+') as file:
                existing_data = json.load(file)
                existing_data.update(new_data)
                file.seek(0)
                json.dump(existing_data, file, indent=2)
                file.truncate()
        else:
            with open(file_path, 'w') as file:
                json.dump(new_data, file, indent=2)
        return jsonify({'success': True, 'message': f'File {filename} updated successfully.'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    
    
    
@app.route('/line-count-like', methods=['GET'])
def line_count_like():
    file_name = request.args.get('file')
    file_path = os.path.join('report', file_name)
    if os.path.exists(file_path):
        count = count_lines(file_path)
        return jsonify(count=count)
    else:
        return jsonify(error="File not found"), 404
    
    
    
@app.route('/second-last-line-like', methods=['GET'])
def second_last_line_like():
    file_name = request.args.get('file')
    file_path = os.path.join('report', file_name)
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            lines = file.readlines()
        second_last_line = lines[-2] if len(lines) > 1 else None
        return jsonify(second_last_line=second_last_line)
    else:
        return jsonify(error="File not found"), 404
    
    
    
@app.route('/read-json/<filename>', methods=['GET'])
def read_json(filename):
    file_path = os.path.join("log_file", filename)
    if not os.path.exists(file_path):
        return jsonify({'success': False, 'message': 'File not found'}), 404
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return jsonify({'success': True, 'data': data})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    
    
    
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)
def count_lines(file_path):
    with open(file_path, 'r') as file:
        return sum(1 for _ in file)



@app.route('/line-count', methods=['GET'])
def line_count():
    file_name = request.args.get('file')
    file_path = os.path.join('log_file', file_name)
    if os.path.exists(file_path):
        count = count_lines(file_path)
        return jsonify(count=count)
    else:
        return jsonify(error="File not found"), 404



@app.route('/second-last-line', methods=['GET'])
def second_last_line():
    file_name = request.args.get('file')
    file_path = os.path.join('log_file', file_name)
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            lines = file.readlines()
        second_last_line = lines[-2] if len(lines) > 1 else None
        return jsonify(second_last_line=second_last_line)
    else:
        return jsonify(error="File not found"), 404



@app.route('/checkdata', methods=['POST'])
def checkdata():
    fname= request.form['fname']
    lname= request.form['lname']
    email= request.form['email']
    password= request.form['password']
    verify_value=data_check_into_database(fname,lname,email,password)
    if verify_value=="t":
        find_user_name=get_user_info(email,password,fname,lname)
        return render_template('home.html',result=find_user_name)
    elif verify_value=="f":
        return render_template('login.html', result="Wrong email or password...")
    else:
        return render_template('login.html', result=verify_value)



@app.route('/chatterbox', methods=['GET'])
def chatterbox():
    return render_template('chatterbox.html')
def get_file_count(folder):
    return len([name for name in os.listdir(folder) if os.path.isfile(os.path.join(folder, name))])



@app.route('/upload', methods=['POST'])
def upload_file():
    if 'files' not in request.files:
        return 'No file part', 400
    files = request.files.getlist('files')
    file_count = get_file_count(UPLOAD_FOLDER)
    uploaded_files = []
    for file in files:
        if file.filename == '':
            return 'No selected file', 400
        filename, file_extension = os.path.splitext(file.filename)
        new_filename = f"{filename}_{file_count}{file_extension}"
        file_path = os.path.join(UPLOAD_FOLDER, new_filename)
        file.save(file_path)
        file_count += 1
        uploaded_files.append({
            'name': new_filename,
            'path': file_path
        })
    return jsonify({'uploaded_files': uploaded_files}), 200




@app.route('/read_file/<filename>')
def ser_file(filename):
    return send_from_directory('log_file/read_files', filename)

if __name__ == '__main__':
    app.run(debug=True)

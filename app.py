import streamlit as st
from txtai.pipeline import Summary
from PyPDF2 import PdfReader


@st.cache_resource
def summary_text(input_text: str) -> str:
    return Summary()(input_text)


def extract_text_from_pdf(pdf_file) -> str:
    pdf_reader = PdfReader(pdf_file)
    text = []
    for page in pdf_reader.pages:
        text.append(page.extract_text())
    return ''.join(text)


st.set_page_config(
    page_title='Text Summarizer',
    page_icon='📝',
    layout='wide'
)

choice = st.sidebar.selectbox('Select your choice', ['Summarize Text',
                                                     'Summarize Document'])

if choice == 'Summarize Text':
    st.subheader('Summarize Text using txt.ai')
    input_text = st.text_area('Enter your text here')
    if st.button('Summarize Text'):
        if len(input_text) < 100:
            st.error('The text must include at least 100 characters')
        else:
            col1, col2 = st.columns([1, 1])
            with col1:
                st.markdown('**Your input text**')
                st.info(input_text)
            with col2:
                result = summary_text(input_text)
                st.markdown('**Summarize Text**')
                st.success(result)

elif choice == 'Summarize Document':
    st.subheader('Summarize Document using txt.ai')
    input_file = st.file_uploader('Upload your document', type=['pdf'])
    if st.button('Summarize Document'):
        if input_file:
            extracted_text = extract_text_from_pdf(input_file)
            col1, col2 = st.columns([1, 1])
            with col1:
                st.markdown('**Extracted Text from Document**')
                st.info(extracted_text)
            with col2:
                result = summary_text(extracted_text)
                st.markdown('**Summarize Text**')
                st.success(result)
